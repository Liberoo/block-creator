<?php
  /**
   * Block gresss
   *
   * @package WordPress
   * @subpackage systemex
   * @since systemex 1.0
   */
  $block_object = new Block( $block );
  $attr         = $block_object->get_attr();
  $name         = $block_object->get_name();

  $heading = get_field('heading');
$age = get_field('age');
if( have_rows('example') ):
  while( have_rows('example') ) : the_row();
    $colorfield123 = get_sub_field('colorfield123');
  endwhile;
endif;
  ?>

  <section <?php echo $attr; ?>>
	  <?php load_inline_styles( __DIR__, $name ); ?>
	  <?php load_inline_styles_plugin('splide'); ?>
	  <?php load_inline_styles_shared('learn-btn'); ?>
  </section>