<?php
  /**
   * Block husa
   *
   * @package WordPress
   * @subpackage systemex
   * @since systemex 1.0
   */
  $block_object = new Block( $block );
  $attr         = $block_object->get_attr();
  $name         = $block_object->get_name();

  $kamil = get_field('kamil');
$objective = get_field('objective');
  ?>

  <section <?php echo $attr; ?>>
	  <?php load_inline_styles( __DIR__, $name ); ?>
  </section>