export function generateIndexStructure(generateFieldGroupsJson) {

    return `
    Given the following ACF JSON structure, generate PHP code to retrieve all ACF fields into variables, including handling repeater fields with their subfields in a while loop.
    Return only code without any formatting (without '''php} and anything else. 
    For example for ACF JSON where i have text heading, text description, true/false are you ready, and repeater color with field colorName text shloud be:
    $heading = get_field('heading');
    $description = get_field('description');
    $are_you_ready = get_field('are_you_ready');
    if( have_rows('color') ):
      while( have_rows('color') ) : the_row();
        $colorName = get_sub_field('colorName');
      endwhile;
    endif;

    ${generateFieldGroupsJson}


  `;
}