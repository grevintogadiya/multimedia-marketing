import { useParams } from "react-router-dom";
import { blogs } from "../data/blogData";

export default function BlogDetails() {

  const { slug } = useParams();

  const blog = blogs.find(item => item.slug === slug);

  if (!blog) {
    return <h1 className="text-center py-20">Blog Not Found</h1>;
  }

  return (

    <section className="py-24">

      <div className="max-w-4xl mx-auto px-6">

        <img
          src={blog.image}
          alt={blog.title}
          className="rounded-3xl mb-10"
        />

        <p className="text-blue-600 font-semibold">
          {blog.date}
        </p>

        <h1 className="text-5xl font-bold mt-4">
          {blog.title}
        </h1>

        <div className="mt-8 text-gray-600 leading-9 whitespace-pre-line">
          {blog.content}
        </div>

      </div>

    </section>

  );

}