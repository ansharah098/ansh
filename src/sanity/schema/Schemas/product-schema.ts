

import { defineField, defineType } from "sanity";

export  const Products  =  defineType({
    name:'products',
    type:'document',
    title:'products',
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