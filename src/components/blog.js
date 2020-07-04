import React from "react"
import BlogPost from "./blog-post"

const Blog = ({ data }) => {
  return (
    <section id="blog" className="container mx-auto my-12 lg:mt-24">
      <div>
        <h2 className="title">
          <span>From our</span>
          &nbsp;
          <span className="text-primary">blog</span>
        </h2>
      </div>
      <div className="mt-8">
        <div className="flex -mx-2 overflow-y-scroll">
          {data.allContentfulBlogpost.edges.map(({ node }, index) => (
            <BlogPost key={index} {...node} />
          ))}
          {/* {data.allContentfulBlogpost.edges.map(({ node }, index) => (
            <BlogPost key={index} {...node} />
          ))}
          {data.allContentfulBlogpost.edges.map(({ node }, index) => (
            <BlogPost key={index} {...node} />
          ))} */}
        </div>
      </div>
    </section>
  )
}

export default Blog
