import React from "react";
import { blogs } from "./BlogData";
import { Link } from "react-router-dom";

export default function BlogContent() {
  return (
    <section className="features-products w-full bg-gray-100 px-4 md:px-20 py-20 text-center">
      <div className="features-allpro w-full flex flex-wrap justify-between items-start mt-8">
        {blogs.map((blog) => (
          <div
            className="w-full md:w-[48%] lg:w-[48%] p-2 md:p-4 shadow-md rounded-lg relative border border-gray-300 overflow-hidden transform transition-transform hover:scale-105 my-[20px]  group flex"
            key={blog.id}
            style={{ flex: "0 0 auto" }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-[50%] h-[56vh] object-cover border rounded-lg"
            />
            <div className="desk text-start px-5 relative flex-grow w-[100%]">
              <div>
                <h3 className="text-xl mt-2 font-semibold pt-1 hover:text-teal-500">
                  {blog.heading}
                </h3>
                <p className="mt-2">{blog.content}</p>
                <p className="mb-2">{blog.paragraph}</p>
                <Link to={`/blog/${blog.id}`} className="">
                  <button className=" text-blue-500">Read More...</button>
                </Link>
                <p>Author: {blog.author}</p>
                <p>Date: {blog.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
