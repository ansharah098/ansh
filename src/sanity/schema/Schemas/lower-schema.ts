import { defineType, defineField } from "sanity";

export const Lower = defineType( {
    name:"Lower",
    type: "document",
    title:"Lower",
    fields:[
        defineField({
            name : "name",
            title:"name",
            type: "string",
             }),
             {
                name : "Heading2",
                title:"Heading2",
                type: "string", 
             },

          {
        name : "Description",
        title:"Description",
        type: "string",
        },
        
        {
            name : "Description2",
            title:"Description2",
            type: "string",
            },
            {
                name : "Description3",
                title:"Description3",
                type: "string",
                },
                
        
{
    name:'images',
    type:'array',
    of:[{
        type: 'image'
}],
    title:'Images',
    
},

      ]
    })

;