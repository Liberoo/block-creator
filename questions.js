import inquirer from 'inquirer';

export const questions = async () => {
  return await inquirer.prompt([
	{
		type: 'input',
		name: 'blockName',
		message: 'Enter Block Name:',
	},
	{
		type: 'confirm',
		name: 'addJavascript',
		message: 'Do you want to add JavaScript?',
		default: false,
	},
	{
		type: 'checkbox',
		name: 'blockJsonSupport',
		message: 'Select support options for block.json:',
		choices: [
			'jsx', 'align', 'anchor', 'alignContent', 'mode'
		],
	},
	{
		type: 'confirm',
		name: 'addLibraries',
		message: 'Do you want to add JavaScript libraries?',
		default: false,
	},
	{
		type: 'input',
		name: 'libraries',
		message: 'Enter library names separated by commas:',
		when: (answers) => answers.addLibraries,
	},
	{
		type: 'confirm',
		name: 'addSharedStyles',
		message: 'Do you want to add Shared Styles?',
		default: false,
	},
	{
		type: 'input',
		name: 'sharedStyles',
		message: 'Enter Shared Styles names separated by commas:',
		when: (answers) => answers.addSharedStyles,
	},
	{
		type: 'input',
		name: 'acfFields',
		message: 'Enter ACF fields structure :'
	}
	
]);
};