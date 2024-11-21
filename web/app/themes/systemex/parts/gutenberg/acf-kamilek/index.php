<?php
  /**
   * Block kamilek
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
$game_name = get_field('game_name');
  ?>

  <section <?php echo $attr; ?>>
	  <?php load_inline_styles( __DIR__, $name ); ?>
	  <?php load_inline_styles_plugin('splide'); ?>
	  <?php load_inline_styles_shared('learn-block'); ?>
  </section>