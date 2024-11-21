<?php
  /**
   * Block 22vwecewfwef
   *
   * @package WordPress
   * @subpackage systemex
   * @since systemex 1.0
   */
  $block_object = new Block( $block );
  $attr         = $block_object->get_attr();
  $name         = $block_object->get_name();

  $denaturat = get_field('denaturat');
$clonuj_kamilek = get_field('clonuj_kamilek');
  ?>

  <section <?php echo $attr; ?>>
	  <?php load_inline_styles( __DIR__, $name ); ?>
  </section>