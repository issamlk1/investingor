const blog = {
    title: "Blog",
    name : "blog",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "name",
            type: "string",
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {source:"name"}
        },
        {
            title: 'Category',
            name: 'categories',
            type: 'reference',
            to: [
                {type: 'categories'},
              ]
          },
        {
            title: "Summery",
            name: "prefix",
            type: "text"
        },
        {
            title: "Image",
            name: "image",
            type: "image",
            options:{hotspot:true},
            fields:[{
                name:'alt',
                title: "Alt",
                type: "string"
            }]
        },
        {
            title: "URL",
            name: "url",
            type: "url"
        },
        {
            title: "Content",
            name: "content",
            type: "array",
            of: [{type: "block"}]
        }
]
}
export default blog;