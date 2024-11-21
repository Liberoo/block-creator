<?php
  /**
   * Block Slider
   *
   * @package WordPress
   * @subpackage systemex
   * @since systemex 1.0
   */
  $block_object = new Block( $block );
  $attr         = $block_object->get_attr();
  $name         = $block_object->get_name();

  $heading = get_field('heading');
$description = get_field('description');
if( have_rows('animal') ):
  while( have_rows('animal') ) : the_row();
    $animal_name = get_sub_field('animal_name');
    $animal_age = get_sub_field('animal_age');
    $animal_picture = get_sub_field('animal_picture');
  endwhile;
endif;
  ?>

  <section <?php echo $attr; ?>>
	  <?php load_inline_styles( __DIR__, $name ); ?>
	  <?php load_inline_styles_plugin('splide'); ?>
	  <?php load_inline_styles_plugin('micromodal'); ?>
	  <?php load_inline_styles_shared('splide'); ?>
	  <?php load_inline_styles_shared('button'); ?>
  </section>