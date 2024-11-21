<?php
  /**
   * Block gfsda
   *
   * @package WordPress
   * @subpackage systemex
   * @since systemex 1.0
   */
  $block_object = new Block( $block );
  $attr         = $block_object->get_attr();
  $name         = $block_object->get_name();

  $denaturat = get_field('denaturat');
$pole_clone_kamilka = get_field('pole_clone_kamilka');
  ?>

  <section <?php echo $attr; ?>>
	  <?php load_inline_styles( __DIR__, $name ); ?>
  </section>