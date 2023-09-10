const category = {
    name : "categories",
    title: "Categories",
    type: "document",
    fields: [
        {
            title: "Name",
            name: "name",
            type: "string",
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {source:"name"}
        }
]
}
export default category;