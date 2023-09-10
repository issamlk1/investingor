import { PortableTextBlock } from "sanity"
import { Category } from "./Category"

export type Blog ={
    _id: string,
    _createdAt: Date,
    _updatedAt: Date,
    name: string,
    slug: string,
    prefix: string,
    url: string,
    image: string,
    content: PortableTextBlock[],
    categories: Category
}