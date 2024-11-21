export function generateNewCloneFile(fileContent, additionalField) {
	return `
You are a JSON file creator. Your task is to return the entire content of the input JSON file and add a new field according to the structure of Advanced Custom Fields (ACF). You receive an input file and information about the new field for which you need to create the appropriate structure. Generate a unique 13-character alphanumeric string for the "key" field of the additional field and prefix it with "field_" You return the modified JSON file that contains the entire original content of the input file plus the new field. You do not add any comments or additional characters. Simply return the resulting JSON file. The response should be valid JSON.

-----------------
Example 1:
Input File:
{
"key": "group_66e2fdcbb1b87",
"title": "--Clone Fields",
"fields": [
{
"key": "field_66e2fdcb544df",
"label": "Heading",
"name": "heading",
"aria-label": "",
"type": "text",
"instructions": "",
"required": 0,
"conditional_logic": 0,
"wrapper": {
"width": "",
"class": "",
"id": ""
},
"default_value": "",
"maxlength": "",
"allow_in_bindings": 0,
"placeholder": "",
"prepend": "",
"append": ""
},
{
"key": "field_66e2fde6544e0",
"label": "Description",
"name": "description",
"aria-label": "",
"type": "text",
"instructions": "",
"required": 0,
"conditional_logic": 0,
"wrapper": {
"width": "",
"class": "",
"id": ""
},
"default_value": "",
"maxlength": "",
"allow_in_bindings": 0,
"placeholder": "",
"prepend": "",
"append": ""
},
{
"key": "field_66e2fdf1544e1",
"label": "Icon",
"name": "icon",
"aria-label": "",
"type": "image",
"instructions": "",
"required": 0,
"conditional_logic": 0,
"wrapper": {
"width": "",
"class": "",
"id": ""
},
"return_format": "id",
"library": "all",
"min_width": "",
"min_height": "",
"min_size": "",
"max_width": "",
"max_height": "",
"max_size": "",
"mime_types": "",
"allow_in_bindings": 0,
"preview_size": "medium"
}
],
"location": [
[
{
"param": "post_type",
"operator": "==",
"value": "post"
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
"modified": 1726152188
}

Additional field : text:Title

This means that you need to return the entire input file as it is, and at the end, add a structure for a new field which will be of type text, label: Title, name: title, and will include other necessary arguments for an ACF field in the JSON file.

You Return:
{
"key": "group_66e2fdcbb1b87",
"title": "--Clone Fields",
"fields": [
{
"key": "field_66e2fdcb544df",
"label": "Heading",
"name": "heading",
"aria-label": "",
"type": "text",
"instructions": "",
"required": 0,
"conditional_logic": 0,
"wrapper": {
"width": "",
"class": "",
"id": ""
},
"default_value": "",
"maxlength": "",
"allow_in_bindings": 0,
"placeholder": "",
"prepend": "",
"append": ""
},
{
"key": "field_66e2fde6544e0",
"label": "Description",
"name": "description",
"aria-label": "",
"type": "text",
"instructions": "",
"required": 0,
"conditional_logic": 0,
"wrapper": {
"width": "",
"class": "",
"id": ""
},
"default_value": "",
"maxlength": "",
"allow_in_bindings": 0,
"placeholder": "",
"prepend": "",
"append": ""
},
{
"key": "field_66e2fdf1544e1",
"label": "Icon",
"name": "icon",
"aria-label": "",
"type": "image",
"instructions": "",
"required": 0,
"conditional_logic": 0,
"wrapper": {
"width": "",
"class": "",
"id": ""
},
"return_format": "id",
"library": "all",
"min_width": "",
"min_height": "",
"min_size": "",
"max_width": "",
"max_height": "",
"max_size": "",
"mime_types": "",
"allow_in_bindings": 0,
"preview_size": "medium"
},
{
"key": "field_<13-character-alphanumeric-string>",
"label": "Title",
"name": "title",
"aria-label": "",
"type": "text",
"instructions": "",
"required": 0,
"conditional_logic": 0,
"wrapper": {
"width": "",
"class": "",
"id": ""
},
"default_value": "",
"maxlength": "",
"allow_in_bindings": 0,
"placeholder": "",
"prepend": "",
"append": ""
},
],
"location": [
[
{
"param": "post_type",
"operator": "==",
"value": "post"
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
"modified": 1726152188
}

Example 2:
Input File:
{
"key": "group_66e2fdcbb1b87",
"title": "--Clone Fields",
"fields": [
{
"key": "field_66fbf855d6bae",
"label": "Dog Age",
"name": "dog_age",
"aria-label": "",
"type": "number",
"instructions": "",
"required": 0,
"conditional_logic": 0,
"wrapper": {
"width": "",
"class": "",
"id": ""
},
"default_value": "",
"min": "",
"max": "",
"allow_in_bindings": 0,
"placeholder": "",
"step": "",
"prepend": "",
"append": ""
},
{
"key": "field_66fbf85fd6baf",
"label": "Description",
"name": "description",
"aria-label": "",
"type": "wysiwyg",
"instructions": "",
"required": 0,
"conditional_logic": 0,
"wrapper": {
"width": "",
"class": "",
"id": ""
},
"default_value": "",
"allow_in_bindings": 0,
"tabs": "all",
"toolbar": "full",
"media_upload": 1,
"delay": 0
},

],
"location": [
    [
        {
            "param": "post_type",
            "operator": "==",
            "value": "post"
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
"modified": 1727789193
}
Additional Field: img:Dog PIcture return id

So you additionally need to add a structure in the JSON file for the ACF field for the img field, where label: Dog Picture, name: dog_picture, and it returns this image as an id

You Return:

{
"key": "group_66e2fdcbb1b87",
"title": "--Clone Fields",
"fields": [
{
"key": "field_66fbf855d6bae",
"label": "Dog Age",
"name": "dog_age",
"aria-label": "",
"type": "number",
"instructions": "",
"required": 0,
"conditional_logic": 0,
"wrapper": {
"width": "",
"class": "",
"id": ""
},
"default_value": "",
"min": "",
"max": "",
"allow_in_bindings": 0,
"placeholder": "",
"step": "",
"prepend": "",
"append": ""
},
{
"key": "field_66fbf85fd6baf",
"label": "Description",
"name": "description",
"aria-label": "",
"type": "wysiwyg",
"instructions": "",
"required": 0,
"conditional_logic": 0,
"wrapper": {
"width": "",
"class": "",
"id": ""
},
"default_value": "",
"allow_in_bindings": 0,
"tabs": "all",
"toolbar": "full",
"media_upload": 1,
"delay": 0
},
{
"key": "field_<13-character-alphanumeric-string>",
"label": "Dog Picture",
"name": "dog_picture",
"aria-label": "",
"type": "image",
"instructions": "",
"required": 0,
"conditional_logic": 0,
"wrapper": {
"width": "",
"class": "",
"id": ""
},
"return_format": "id",
"library": "all",
"min_width": "",
"min_height": "",
"min_size": "",
"max_width": "",
"max_height": "",
"max_size": "",
"mime_types": "",
"allow_in_bindings": 0,
"preview_size": "medium"
}
],
"location": [
[
{
"param": "post_type",
"operator": "==",
"value": "post"
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
"modified": 1727789565
}


------------------------------------------
Based on the examples, return my JSON file structure according to the given information where the input file is:
${fileContent}
and the additional field is: ${additionalField}
  
  `;
  }
  