import React from "react"
import classnames from "classnames"
import BlogPost from "../components/blog-post"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import { useScrollableContainer } from "../utils/use-scrollable-container"

const Blog = ({ data }) => {
  const containerRef = React.useRef()
  const {
    scroll,
    hasOverflow,
    canScrollLeft,
    canScrollRight,
  } = useScrollableContainer({ containerRef })

  return (
    <section
      id="blog"
      className="container mx-auto my-12 lg:mt-24 overflow-hidden"
    >
      <div className="flex flex-row justify-between items-center">
        <h2 className="title">
          <span>
            <FormattedMessage id="blog.fromOur" />
          </span>
          &nbsp;
          <span className="text-primary">
            <FormattedMessage id="blog.blog" />
          </span>
        </h2>
        <div
          className={classnames("hidden sm:block", {
            "sm:hidden": !hasOverflow,
          })}
        >
          <button
            className={classnames(
              "transform scale-125 origin-center text-gray-500 px-3",
              { "text-gray-800 hover:text-secondary": canScrollLeft }
            )}
            onClick={() => scroll("-300")}
          >
            &#8592;
          </button>
          <button
            className={classnames(
              "transform scale-125 origin-center text-gray-500 px-3",
              { "text-gray-800 hover:text-secondary": canScrollRight }
            )}
            onClick={() => scroll("300")}
          >
            &#8594;
          </button>
        </div>
      </div>
      <div className="mt-8 relative">
        <button
          className={classnames(
            "group absolute left-0 inset-y-0 z-10 w-10 transform -translate-x-4 bg-gray-200 bg-opacity-50 flex items-center justify-center outline-none active:outline-none focus:outline-none block sm:hidden",
            { hidden: !hasOverflow || !canScrollLeft }
          )}
          onClick={() => scroll("-300")}
        >
          <span
            className="text-gray-800 hover:text-secondary
              transform scale-125 origin-center
              w-8 h-8 rounded-full bg-white border-2
              border-gray-900 border-opacity-25
              group-hover:border-secondary
              flex items-center justify-center"
          >
            &#8592;
          </span>
        </button>
        <div ref={containerRef} className="flex -mx-2 overflow-hidden">
          {data.allContentfulBlogpost.edges.map(({ node }, index) => (
            <BlogPost key={index} {...node} />
          ))}
        </div>
        <button
          className={classnames(
            "group absolute right-0 inset-y-0 z-10 w-10 transform translate-x-4 bg-gray-200 bg-opacity-50 flex items-center justify-center outline-none active:outline-none focus:outline-none block sm:hidden",
            { hidden: !hasOverflow || !canScrollRight }
          )}
          onClick={() => scroll("300")}
        >
          <span
            className="text-gray-800
              transform scale-125 origin-center
              w-8 h-8 rounded-full bg-white border-2 
              border-gray-500
              group-hover:border-gray-700
              flex items-center justify-center"
          >
            &#8594;
          </span>
        </button>
      </div>
    </section>
  )
}

export default injectIntl(Blog)
