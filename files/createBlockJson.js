export const createBlockJson = (answers, themeName) => {
	const blockNameKebabCase = answers.blockName.replace(/\s+/g, '-').toLowerCase();
	  
	let blockJson = {
	  "$schema": "https://schemas.wp.org/trunk/block.json",
	  "apiVersion": 2,
	  "name": blockNameKebabCase,
	  "title": answers.blockName.charAt(0).toUpperCase() + answers.blockName.slice(1),
	  "category": "theme_blocks",
	  "description": answers.blockName.toLowerCase(),
	  "keywords": [answers.blockName.toLowerCase(), "content"],
	  "textdomain": themeName,
	  "supports": {},
	  "icon": "welcome-widgets-menus",
	  "acf": {
		"mode": "edit",
		"renderTemplate": "index.php"
	  }
	};
	
	if (answers.blockJsonSupport && Array.isArray(answers.blockJsonSupport)) {
	  answers.blockJsonSupport.forEach(option => {
		blockJson.supports[option] = true;
	  });
	}
  
	if (answers.addJavascript) {
	  blockJson.viewScript = [`acf-${blockNameKebabCase}`];
	  blockJson.editorScript = ["acf", `acf-${blockNameKebabCase}`];
  
	  if (answers.addLibraries && answers.libraries) {
		const libraries = answers.libraries.split(',').map(lib => lib.trim());
		blockJson.viewScript.push(...libraries);
		blockJson.editorScript.push(...libraries);
	  }
	}
  
	return blockJson;
  };
  