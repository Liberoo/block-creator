import fs from 'fs';
import ora from 'ora';
import chalk from 'chalk';
import { openAiApi } from './openAiApi.js';
import { generateReadyShowClone } from './openai_prompts/generateReadyShowClone.js';
import { writeToFile } from './fileManager.js';

export const showCloneFunc = async (sourceFilePath, outputFilePath) => {
    const spinner = ora('Generating readyShowClone.json with OpenAI...'); 
    
    try {
        const fileContent = fs.readFileSync(sourceFilePath, 'utf8');
        
        spinner.start(); 
        const jsonContent = await openAiApi(generateReadyShowClone(fileContent));

        writeToFile(outputFilePath, jsonContent);
        spinner.succeed('Your Clone Fields is ready');
        
    } catch (error) {
        spinner.fail('Failed to generate readyShowClone.json with OpenAI');
        console.error(chalk.red('Błąd:'), error.message);
    }
};
