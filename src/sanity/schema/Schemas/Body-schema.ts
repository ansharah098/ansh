import { defineType, defineField } from "sanity";

export const Body = defineType( {
    name:"Body",
    type: "document",
    title:"Body",
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
            },
            {
                name:"images",
                title:"images",
                type:"array",
                of:[{
                    type:'image',
            }]
                    
                
            }
      ]
    })

;