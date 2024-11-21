export function generateReadyShowClone(fileName) {
    return `
  I want you to act as a JSON file analyzer. Please read the provided JSON file and return a concise summary of each field found in the JSON file. For each field, include the key, field type, label, and name. If the field has additional relevant attributes like return_format, include those as well. Ensure all fields are returned in an array. Return this for:
  ---------
  for example, for structure
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
  
  return:
  [
    {
      "Key": "field_66e2fdcb544df",
      "Type": "text",
      "Label": "Heading",
      "Name": "heading"
    },
    {
      "Key": "field_66e2fde6544e0",
      "Type": "text",
      "Label": "Description",
      "Name": "description"
    },
    {
      "Key": "field_66e2fdf1544e1",
      "Type": "image",
      "Label": "Icon",
      "Name": "icon",
      "ReturnFormat": "id"
    }
  ]
  -----------------------
  
  Return only this structure for file:
  
  
  ${fileName}
  without any additional information and '''json symbol on start and end.
  `;
}
