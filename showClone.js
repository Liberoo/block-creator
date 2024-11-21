import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { THEME_NAME, CLONE_FILE_NAME } from './variables.js';
import { showCloneFunc } from './showCloneFunc.js';

const filePath = path.join('web', 'app', 'themes', THEME_NAME, 'acf-json', `${CLONE_FILE_NAME}.json`);
const outputFilePath = './readyShowClone.json';

const cleanJSONContent = (content) => {
    // Removes potential BOM and trims whitespace
    return content.replace(/^\uFEFF/, '').trim();
};

const displayCloneFields = (content) => {
    console.clear();
    console.log('\n\n' + chalk.blue('Your Clone Fields:'));

    try {
        const cleanedContent = cleanJSONContent(content);
        const fields = JSON.parse(cleanedContent);
        fields.forEach((field) => {
            const formattedOutput = `type:${field.Type}, label:${field.Label}, name:${field.Name}`;
            console.log(chalk.yellow(formattedOutput));
        });
    } catch (jsonError) {
        console.error(chalk.red('Błąd parsowania JSON:'), jsonError.message);
    }
};

const processCloneFile = async () => {
    try {
        if (fs.existsSync(outputFilePath)) {
            const existingContent = fs.readFileSync(outputFilePath, 'utf8');
            displayCloneFields(existingContent);
            return;
        }

        await showCloneFunc(filePath, outputFilePath);

        const newContent = fs.readFileSync(outputFilePath, 'utf8');
        displayCloneFields(newContent);
    } catch (error) {
        console.error(chalk.red('Błąd:'), error.message);
    }
};

processCloneFile();
