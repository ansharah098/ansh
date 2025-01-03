import { defineType, defineField } from "sanity";

export const Benefits = defineType( {
    name:"Benefits",
    type: "document",
    title:"Benefits",
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