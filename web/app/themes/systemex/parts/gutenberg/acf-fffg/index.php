<?php
  /**
   * Block fffg
   *
   * @package WordPress
   * @subpackage systemex
   * @since systemex 1.0
   */
  $block_object = new Block( $block );
  $attr         = $block_object->get_attr();
  $name         = $block_object->get_name();

  $address = get_field('address');
if( have_rows('kamil_robi_clone') ):
  while( have_rows('kamil_robi_clone') ) : the_row();
    // Assuming 'kamil_robi_clone' clones fields like 'field_66e2fdcbb0a34' and 'field_66e2fdcbf1a2b'
    $field_66e2fdcbb0a34 = get_sub_field('field_66e2fdcbb0a34');
    $field_66e2fdcbf1a2b = get_sub_field('field_66e2fdcbf1a2b');
  endwhile;
endif;
  ?>

  <section <?php echo $attr; ?>>
	  <?php load_inline_styles( __DIR__, $name ); ?>
  </section>