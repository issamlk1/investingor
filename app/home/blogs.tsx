import BlogCard from "../components/blogCard";
import { getBlogs } from "@/sanity/sanity.utils";



export default async function Blogs() {
  const blogs = await getBlogs();
  return (
    <div>
      <section className="">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold  capitalize lg:text-3xl ">
            From the blog
          </h1>

          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
              src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <p className="text-sm text-primary uppercase">category</p>

              <a
                href="#"
                className="block mt-4 text-2xl font-semibold hover:underline dark:text-white"
              >
                All the features you want to know
              </a>

              <p className="mt-3 text-sm  opacity-70 md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                veritatis sint autem nesciunt, laudantium quia tempore delect
              </p>

              <a
                href="#"
                className="inline-block mt-2 text-primary underline hover:text-primary-600"
              >
                Read more
              </a>

              <div className="flex items-center mt-6">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="text-sm opacity-70">
                    Amelia. Anderson
                  </h1>
                  <p className="text-sm opacity-50">
                    Lead Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-3 gap-4  container px-6 py-10 mx-auto">
          {blogs.map((blog) => (
            <BlogCard
              blog={blog}
              className="mb-6 max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
              key={blog._id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
