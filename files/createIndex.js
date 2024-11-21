export const createIndex = (themeName, answers, phpCodeContent) => {
	let indexPhpContent = `
  <?php
  /**
   * Block ${answers.blockName}
   *
   * @package WordPress
   * @subpackage ${themeName}
   * @since ${themeName} 1.0
   */
  $block_object = new Block( $block );
  $attr         = $block_object->get_attr();
  $name         = $block_object->get_name();

  ${phpCodeContent}
  ?>

  <section <?php echo $attr; ?>>
	  <?php load_inline_styles( __DIR__, $name ); ?>`;
	if (answers.addLibraries && answers.libraries) {
	  const librariesArray = answers.libraries.split(',').map(lib => lib.trim());
	  for (const library of librariesArray) {
		indexPhpContent += `
	  <?php load_inline_styles_plugin('${library}'); ?>`;
	  }
	}
	if (answers.addSharedStyles && answers.sharedStyles) {
	  const sharedStylesArray = answers.sharedStyles.split(',').map(style => style.trim());
	  for (const style of sharedStylesArray) {
		indexPhpContent += `
	  <?php load_inline_styles_shared('${style}'); ?>`;
	  }
	}
  
	indexPhpContent += `
  </section>
  `;
  
	return indexPhpContent;
  };
  