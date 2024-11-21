
export function generateJsFilesContent(answers) {
	let registerPhpContent = '';
	let indexJsContent = '';

	  const libraries = answers.addLibraries? 
		answers.libraries.split(',').map(lib => `'${lib.trim()}'`).join(', ') :
		"";
  
	  registerPhpContent = `
	  <?php
	  $slug = 'acf-${answers.blockName}';
	  $dir_path = "/parts/gutenberg/$slug";
	  
	  wp_register_script( $slug, get_theme_file_uri( "$dir_path/index.min.js" ), [ ${libraries || ''} ], filemtime( get_theme_file_path( "$dir_path/index.min.js" ) ), true );
	  `.trim();
  

	  if (answers.libraries && answers.libraries.includes('splide')) {
		indexJsContent = `
		/* global Splide */
		const elms = document.getElementsByClassName('slider__container');
		const runSlider = () => {
		  Array.prototype.forEach.call(elms, el => {
			new Splide(el, {
			  perPage: 1,
			  autoHeight: true,
			  arrows: false,
			}).mount();
		  });
		};
		
		runSlider();
		
		if (window.acf) {
		  window.acf.addAction('render_block_preview/type=slider', runSlider);
		}
		`.trim();
	  }
	
  
	return { registerPhpContent, indexJsContent };
  }
  