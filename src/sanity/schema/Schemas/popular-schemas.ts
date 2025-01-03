

import { defineField, defineType } from "sanity";

export  const Popular  =  defineType({
    name:'Popular',
    type:'document',
    title:'Popular',
    fields:[
         defineField({
   name:'name',
   type:'string',
   title:'Name',
         }),

{
    name:'images',
    type:'array',
    of:[{
        type: 'image'
}],
    title:'Images',
    
},
{
    name:'price',
    type:'number',
    title:'Price',
}


    ]
})