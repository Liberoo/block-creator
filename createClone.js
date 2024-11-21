import inquirer from 'inquirer';
import { openAiApi } from './openAiApi.js';  
import { generateNewCloneFile } from './openai_prompts/generateNewCloneFile.js';
import { THEME_NAME, CLONE_FILE_NAME } from './variables.js';  
import { showCloneFunc } from './showCloneFunc.js';

import fs from 'fs';  
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';

const filePath = path.join('web', 'app', 'themes', THEME_NAME, 'acf-json', `${CLONE_FILE_NAME}.json`);
const outputFilePath = './readyShowClone.json';

async function main() {
  const questions = [
    {
      type: 'input',
      name: 'cloneFieldName',
      message: 'Clone field parameters:',
    },
  ];

  const answers = await inquirer.prompt(questions);
  
  try {
    const filePath = path.join('web', 'app', 'themes', THEME_NAME, 'acf-json', `${CLONE_FILE_NAME}.json`);
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    fs.writeFileSync('output.json', fileContent);
    console.log('The content has been saved to output.json.');

    const spinner = ora('Generating new Clone Field with OpenAI...').start();
    
    const createJson = await openAiApi(generateNewCloneFile(fileContent, answers.cloneFieldName));
    
    spinner.succeed('New clone file generated');

    const parsedJson = JSON.parse(createJson);

    const acfJsonFolderPath = path.join('web', 'app', 'themes', THEME_NAME, 'acf-json');
    
    writeToFile(path.join(acfJsonFolderPath, `${CLONE_FILE_NAME}.json`), parsedJson);
    console.log(`The file ${CLONE_FILE_NAME}.json has been updated with new clone field.`);
  } catch (error) {
    console.error('Failed to generate group JSON with OpenAI', error);
  }

  const updateJson = async () => {
    try {
        await showCloneFunc(filePath, outputFilePath);
        const newContent = fs.readFileSync(outputFilePath, 'utf8');
    } catch (error) {
        console.error(chalk.red('Błąd:'), error.message);
    }
  };

  updateJson();
}

function writeToFile(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`File has been saved at ${filePath}`);
}

main();
