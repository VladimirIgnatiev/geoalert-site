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
            `round-button absolute left-0 z-10
            transform -translate-x-2 -translate-y-1/2 scale-125 origin-center 
            active:outline-none focus:outline-none active:bg-white
            transition-all duration-200 ease-in-out
            sm:invisible sm:opacity-0`,
            { "invisible opacity-0": !hasOverflow || !canScrollLeft }
          )}
          onClick={() => scroll("-300")}
        >
          &#8592;
        </button>
        <div ref={containerRef} className="flex -mx-2 overflow-hidden">
          {data.allContentfulBlogpost.edges.map(({ node }, index) => (
            <BlogPost key={index} {...node} />
          ))}
        </div>
        <button
          className={classnames(
            `round-button absolute right-0 z-10
            transform translate-x-2 -translate-y-1/2 scale-125 origin-center 
            active:outline-none focus:outline-none
            transition-all duration-200 ease-in-out
            sm:invisible sm:opacity-0`,
            { "invisible opacity-0": !hasOverflow || !canScrollRight }
          )}
          onClick={() => scroll("300")}
        >
          &#8594;
        </button>
      </div>
    </section>
  )
}

export default injectIntl(Blog)
