import { getBlog } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
import { parseISO, format } from "date-fns";
import { ar } from 'date-fns/locale'
import { Link } from "@nextui-org/link";

type props = {
  params: { blog: string };
};

export default async function Blog({ params }: props) {
  const slug = params.blog;
  const blog = await getBlog(slug);
  const createdAt = parseISO(blog._createdAt.toString());
  const updatedAt = blog._updatedAt ? parseISO(blog._updatedAt.toString()) : 1;
  return (
    <article className="px-6 mx-auto container mt-24 ">
      <div itemScope itemType="https://schema.org/NewsArticle">
        <h1 itemProp="headline" className="text-3xl my-4">
          {blog.name} 
        </h1>
        <meta itemProp="image" content={blog.image} />
        <div className="text-xs opacity-60 py-1">
          نشر بتاريخ:&nbsp;
          <span
            className="px-2"
            itemProp="datePublished"
            content={blog._createdAt.toString()}
          >
            {format(createdAt, "d MMM yyyy",{locale:ar})}
          </span>
          {blog._updatedAt && (
           <span>آخر تحديث:&nbsp;</span>
          )}
          {blog._updatedAt && (
            <span
              className="px-2"
              itemProp="dateModified"
              content={blog._updatedAt.toString()}
            >
            {format(updatedAt, "d MMM yyyy",{locale:ar})}
            </span>
          )}
          <span>،في قسم&nbsp;</span>
          <span>
            <Link href={`/category/${blog.categories.slug.current}`} >{blog.categories.name}</Link>
          </span>
        </div>
        <div className="text-xs opacity-60 py-1" >
          بقلم:&nbsp;
          <span
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person"
          >
            <a itemProp="url" href="https://example.com/profile/janedoe123">
              <span itemProp="name">أحمد علي،</span>
            </a>
          </span>
          &nbsp;مراجعة:&nbsp;
          <span
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person"
          >
            <a itemProp="url" href="https://example.com/profile/johndoe123">
              <span itemProp="name">محمد العبد</span>
            </a>
          </span>
        </div>
      </div>
    
      <div className="my-10">
        <h2 className="text-xl">{blog.prefix}</h2>
      </div>
      <div className="my-10">
        <PortableText value={blog.content} />
      </div>
    </article>
  );
}
