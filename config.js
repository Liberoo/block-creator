import fs from 'fs';
import inquirer from 'inquirer';

// Ścieżka do pliku variables.js
const filePath = './variables.js';

// Odczyt zawartości pliku variables.js
let fileContent = fs.readFileSync(filePath, 'utf-8');

// Pomocnicza funkcja do uzyskiwania wartości zmiennej
function getVariableValue(variable) {
    const regex = new RegExp(`export const ${variable} = '(.*)';`);
    const match = fileContent.match(regex);
    return match ? match[1] : '';
}

// Funkcja do aktualizacji lub dodawania zmiennych
async function updateVariables() {
    // Pobieranie obecnych wartości zmiennych
    const currentValues = {
        CHATGPT_API_KEY: getVariableValue('CHATGPT_API_KEY'),
        THEME_NAME: getVariableValue('THEME_NAME'),
        CLONE_FILE_NAME: getVariableValue('CLONE_FILE_NAME')
    };

    // Pytania, które będą zadane użytkownikowi
    const questions = [
        {
            type: 'input',
            name: 'CHATGPT_API_KEY',
            message: 'Please enter your CHATGPT API Key:',
            default: currentValues.CHATGPT_API_KEY || 'sk-xxxx'
        },
        {
            type: 'input',
            name: 'THEME_NAME',
            message: 'Please enter the theme name:',
            default: currentValues.THEME_NAME || 'themeName'
        },
        {
            type: 'input',
            name: 'CLONE_FILE_NAME',
            message: 'Please enter the ACF clone file ID:',
            default: currentValues.CLONE_FILE_NAME || 'group_66e2fdcbb1b87'
        }
    ];

    // Uzyskaj odpowiedzi od użytkownika
    const answers = await inquirer.prompt(questions);

    // Aktualizuj zawartość pliku na podstawie odpowiedzi użytkownika
    for (let key in answers) {
        if (answers.hasOwnProperty(key)) {
            const regex = new RegExp(`(export const ${key} = ).*;`);
            const newValue = `export const ${key} = '${answers[key]}';`;
            if (fileContent.match(regex)) {
                fileContent = fileContent.replace(regex, newValue);
            } else {
                fileContent += `\n${newValue}`;
            }
        }
    }

    // Zapisz zaktualizowaną zawartość pliku variables.js
    fs.writeFileSync(filePath, fileContent, 'utf-8');
    console.log('Variables updated successfully!');
}

// Uruchamianie procesu aktualizacji zmiennych
updateVariables();
