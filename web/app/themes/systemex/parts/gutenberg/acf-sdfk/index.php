<?php
  /**
   * Block sdfk
   *
   * @package WordPress
   * @subpackage systemex
   * @since systemex 1.0
   */
  $block_object = new Block( $block );
  $attr         = $block_object->get_attr();
  $name         = $block_object->get_name();

  $greg = get_field('greg');
if( have_rows('my_cloning') ):
  while( have_rows('my_cloning') ) : the_row();
    // Add subfields of the 'my_cloning' repeater here, if any
  endwhile;
endif;
  ?>

  <section <?php echo $attr; ?>>
	  <?php load_inline_styles( __DIR__, $name ); ?>
  </section>