import Image from "next/image";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import { ar } from 'date-fns/locale'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";

export default function BlogCard(props: any) {
  const createdAt = parseISO(props.blog._createdAt.toString());
  return (
    <div {...props}>
       <Card className="">
      <CardHeader className="flex gap-3 p-0">
      
        <div className="flex flex-col">
        {props.blog.image && (
        <Image
          className="object-cover w-full h-64 rounded-t-md"
          src={props.blog.image}
          alt={props.blog.alt}
          height="100"
          width="100"
        />
      )}
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        
      <div>
          <span className="text-xs font-medium text-primary uppercase ">
          {props.blog.categories.name}
          </span>
          <Link
            key={props.blog._id}
            href={`/blog/${props.blog.slug}`}
            className="block mt-2 text-xl font-semibold  transition-colors duration-300 transform opacity-80 hover:opacity-100 hover:underline"
          >
            {props.blog.name}
          </Link>

          <p className="mt-2 text-sm opacity-60">
            {props.blog.prefix}
          </p>
        </div>
        
      </CardBody>
      <Divider/>
      <CardFooter>
      <div className="flex items-center">
            <div className="flex items-center">
              <a
                href="#"
                className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                role="link"
              >
                محمد الأحمد
              </a>
            </div>
            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
            {format(createdAt, "d MMM yyyy",{locale:ar})}
            </span>
          </div>
      </CardFooter>
    </Card>
     
    </div>
  );
}
