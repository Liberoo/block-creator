<?php
  /**
   * Block fds
   *
   * @package WordPress
   * @subpackage systemex
   * @since systemex 1.0
   */
  $block_object = new Block( $block );
  $attr         = $block_object->get_attr();
  $name         = $block_object->get_name();

  $decoration = get_field('decoration');
$kamil_field_1 = get_field('field_color_key_1');
$kamil_field_2 = get_field('field_color_key_2');
  ?>

  <section <?php echo $attr; ?>>
	  <?php load_inline_styles( __DIR__, $name ); ?>
  </section>