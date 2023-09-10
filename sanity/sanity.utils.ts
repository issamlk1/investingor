import { Blog } from "@/types/Blog";
import { createClient, groq } from "next-sanity";

const client = createClient({
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
   apiVersion:  process.env.NEXT_PUBLIC_SANITY_API_VERSION,
});

export async function getBlogs(): Promise<Blog[]>{
   return client.fetch(
      groq`*[_type == "blog"]{
         _id,
         _createdAt,
         _updatedAt,
         name,
         "slug":slug.current,
         "image": image.asset->url,
         alt,
         prefix,
         content,
         categories->
      }`
   )
   }


export async function getBlog(slug : string): Promise<Blog[]>{
   return client.fetch(
      groq`*[_type == "blog" && slug.current == $slug][0]{
         _id,
         _createdAt,
         _updatedAt,
         name,
         "slug":slug.current,
         "image": image.asset->url,
         alt,
         prefix,
         content,
         categories->
      }`,
      {slug}
   )
   }