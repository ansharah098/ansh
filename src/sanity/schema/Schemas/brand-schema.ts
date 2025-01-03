import { defineType, defineField } from "sanity";

export const Brand = defineType( {
    name:"Brand",
    type: "document",
    title:"Brand",
    fields:[
        defineField({
            name : "name",
            title:"name",
            type: "string",
             }),

          {
        name : "Description",
        title:"Description",
        type: "string",
        }
      ]
    })

;