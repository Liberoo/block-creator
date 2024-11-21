export function generateFieldGroupsJson(answers, uniqueKey,cloneFields) {

  return `
    Create a JSON structure for the Advanced Custom Fields (ACF) plugin’s “fields group” based on the following schema: ${answers.acfFields}. 
Here is an example of a ready structure for different fields for an ACF JSON file:
{
  "key": "${uniqueKey}",
  "title": "[block] ${answers.blockName}",
  "fields": [
      {
          "key": "field_64a801f758031",
          "label": "",
          "name": "",
          "aria-label": "",
          "type": "message",
          "instructions": "",
          "required": 0,
          "conditional_logic": 0,
          "wrapper": {
              "width": "",
              "class": "",
              "id": ""
          },
          "message": "These links will be used for breadcrumbs structure.",
          "new_lines": "wpautop",
          "esc_html": 0
      },
      {
          "key": "field_64a8010adfec1",
          "label": "Services Archive Link",
          "name": "plinks_service_archive_link",
          "aria-label": "",
          "type": "link",
          "instructions": "",
          "required": 0,
          "conditional_logic": 0,
          "wrapper": {
              "width": "",
              "class": "",
              "id": ""
          },
          "return_format": "array"
      },
      {
          "key": "field_65bbb93973c07",
          "label": "Podcasts Archive Link",
          "name": "plinks_podcast_archive_link",
          "aria-label": "",
          "type": "link",
          "instructions": "",
          "required": 0,
          "conditional_logic": 0,
          "wrapper": {
              "width": "",
              "class": "",
              "id": ""
          },
          "_is_encrypted": 0,
          "return_format": "array"
      }
  ],
  "location": [
      [
          {
              "param": "block",
              "operator": "==",
              "value": "${answers.blockName}"
          }
      ]
  ],
  "menu_order": 0,
  "position": "normal",
  "style": "default",
  "label_placement": "top",
  "instruction_placement": "label",
  "hide_on_screen": "",
  "active": true,
  "description": "",
  "show_in_rest": 0,
  "modified": 1707233314
}
  Additional requirements:
- 'key' should always be 'field_' followed by a random unique 13-character alphanumeric string.
- 'label' should be formatted with each word starting with a capital letter.
- Words in 'name' should be separated by underscores (_).
Example:
{
  "key": "field_54f7b93s02f38",
  "label": "Dog Image",
  "name": "dog_image"
}

If answers.acfFields contains a clone field, you need to create a structure for the clone fields by adding the key of the corresponding field from the following structure. 
For example: 
clone: Clone Fields(text:heading, text:description)
You need to add a clone field named "Clone Fields" and choose the key of the corresponding field from the CloneFields structure. So if there is clone: Clone Fields(text:heading, text:description) return only the field keys that match the description, that is, the key of the field heading which is of type text, and the key of the field description which is also of type text. If you think no field matches, do not add any.
This is an example, and always take the 'key' of the field whose name and text match what is in CloneFields. So if there is
clone: My Clone Fields (number: age, text: dog name), you look for the key of the number field named age and the text field named dog name.

Another example:
clone: Cloning (true/false: male, text: car), you search for fields in cloneFields that are of type true/false with the name male and text with the name car.
If such a field does not exist, you add nothing.

For instance:
{
  "fields": [
    {
      "key": "field_66faaefa89363",
      "label": "Clone Fields",
      "name": "clone_fields",
      "aria-label": "",
      "type": "clone",
      "instructions": "",
      "required": 0,
      "conditional_logic": 0,
      "wrapper": {
        "width": "",
        "class": "",
        "id": ""
      },
      "clone": [
        "field_66e2fdcb544df",
        "field_66e2fde6544e0",

      ],
      "display": "seamless",
      "layout": "block",
      "prefix_label": 0,
      "prefix_name": 0
    }
  ]
}

Return only JSON structure file without any formatting (without '''json). For data:
- ACF fields: ${answers.acfFields}
- file key: group_${uniqueKey}
- title: [block] ${answers.blockName}
- CloneFields: ${cloneFields}

On the end of code write why you used this key from CloneFields and not anoter
  `;
}