import ora from 'ora';
import chalk from 'chalk';
import path from 'path';
import fs from 'fs';
import { THEME_NAME } from './variables.js';
import { questions } from './questions.js';
import { createFolderAndFiles, writeToFile } from './fileManager.js';
import { createBlockJson } from './files/createBlockJson.js';
import { createScss } from './files/createScss.js';
import { generateJsFilesContent } from './files/generateJsFiles.js';
import { generateFieldGroupsJson } from './openai_prompts/generateFieldGroupsJson.js';
import { generateIndexStructure } from './openai_prompts/generateIndexStructure.js';
import { createIndex } from './files/createIndex.js';
import { generateUniqueKey } from './generateUniqueKey.js';
import { openAiApi } from './openAiApi.js';
import { CHATGPT_API_KEY, CLONE_FILE_NAME } from './variables.js';

const apiKey = CHATGPT_API_KEY;
const themeName = THEME_NAME;
const highlightedCommand = chalk.bold.bgBlue('creator:config');
const showCommand = chalk.bold.bgGreen('creator:show');
const cloneFields = CLONE_FILE_NAME;

async function main() {
  if (!apiKey || !apiKey.startsWith('sk-')) {
    ora(`Error: Missing or invalid OpenAI API key. Please use the command ${highlightedCommand} to set the key.`).fail();
    return;
  }

  if (themeName === 'themeName') {
    ora(`Error: Theme name not set. Please use the command ${highlightedCommand} to set theme name.`).fail();
    return;
  }

  const answers = await questions();
  console.clear();
  const blockNameKebabCase = answers.blockName.replace(/\s+/g, '-').toLowerCase();
  const folderPath = path.join('./web/app/themes', THEME_NAME, 'parts/gutenberg', `acf-${blockNameKebabCase}`);

  if (fs.existsSync(folderPath)) {
    ora(`Error: Block with name "${answers.blockName}" already exists. Please use a different name.`).fail();
    return;
  }

  const files = ['index.php', 'style.scss', 'block.json'];

  if (answers.addJavascript) {
    files.push('register.php', 'index.js');
  }

  createFolderAndFiles(folderPath, files);

  // block.json
  const blockJsonContent = createBlockJson(answers, themeName);
  writeToFile(path.join(folderPath, 'block.json'), JSON.stringify(blockJsonContent, null, 2));

  // style.scss
  const scssContent = createScss(answers);
  writeToFile(path.join(folderPath, 'style.scss'), scssContent);

  // index.js, register.php
  if (answers.addJavascript) {
    const { registerPhpContent, indexJsContent } = generateJsFilesContent(answers);

    writeToFile(path.join(folderPath, 'register.php'), registerPhpContent);
    ora('The file register.php has been generated').succeed();

    writeToFile(path.join(folderPath, 'index.js'), indexJsContent);
    ora('The file index.js has been generated').succeed();
  }

  const uniqueKey = generateUniqueKey();
  let createJson;

  // Check for readyShowClone.json file in the same directory as this script
  const cloneFieldsPath = path.join(`./web/app/themes/${themeName}/acf-json/${cloneFields}.json`);

  if (!fs.existsSync(cloneFieldsPath)) {
    ora(
      `Error: The readyShowClone.json file is missing. Please run the command ${showCommand} to generate the file.`
    ).fail();
    return;
  }

  const cloneFieldsFile = JSON.parse(fs.readFileSync(cloneFieldsPath, 'utf8'));
  console.log(cloneFieldsFile);

  // Generate group.json with OpenAI
  const spinner = ora('Generating group.json with OpenAI...').start();

  try {
    createJson = await openAiApi(generateFieldGroupsJson(answers, uniqueKey, cloneFields));
    const acfJsonFolderPath = path.join('./web/app/themes', themeName, 'acf-json');

    writeToFile(path.join(acfJsonFolderPath, `group_${uniqueKey}.json`), createJson);
    spinner.succeed(`The file group_${uniqueKey}.json has been generated`);
  } catch (error) {
    spinner.fail('Failed to generate group JSON with OpenAI');
    console.error(error);
    return;
  }

  // index.php with OpenAI
  const indexSpinner = ora('Generating index.php with OpenAI...').start();

  try {
    const indexJson = await openAiApi(generateIndexStructure(createJson));
    const indexPhpContent = createIndex(themeName, answers, indexJson);

    writeToFile(path.join(folderPath, 'index.php'), indexPhpContent);
    indexSpinner.succeed('The file index.php has been generated');
  } catch (error) {
    indexSpinner.fail('Failed to generate index.php with OpenAI');
    console.error(error);
  }

  ora(`The folder and files have been created at: ${folderPath}`).succeed();
}

main().catch((error) => {
  console.error(error);
});
