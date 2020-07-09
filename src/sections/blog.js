import React from "react"
import classnames from "classnames"
import BlogPost from "../components/blog-post"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import { useScrollableContainer } from "../utils/use-scrollable-container"
import LongArrowLeft from "../icons/long-arrow-left"
import LongArrowRight from "../icons/long-arrow-right"

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
      className="container mx-auto my-12 lg:mt-24 lg:mb-18 lg:pb-4 overflow-hidden"
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
            aria-label="scroll-right"
            className="py-3 px-2 group rounded-sm outline-primary"
            onClick={() => scroll("-300")}
          >
            <LongArrowLeft
              className={classnames("fill-current text-gray-500", {
                "text-gray-700 group-hover:text-secondary": canScrollLeft,
              })}
            />
          </button>
          <button
            aria-label="scroll-left"
            className="py-3 px-2 group rounded-sm outline-primary"
            onClick={() => scroll("300")}
          >
            <LongArrowRight
              className={classnames("fill-current text-gray-500", {
                "text-gray-700 group-hover:text-secondary": canScrollRight,
              })}
            />
          </button>
        </div>
      </div>
      <div className="mt-8 relative">
        <button
          aria-label="scroll-right"
          className={classnames(
            "round-button outline-primary left-0 -translate-x-2",
            {
              "round-button-invisible": !hasOverflow || !canScrollLeft,
            }
          )}
          onMouseUp={() => scroll("-300")}
        >
          <LongArrowLeft />
        </button>
        <div
          ref={containerRef}
          className="flex -mx-2 overflow-x-scroll sm:overflow-hidden"
        >
          {data.allContentfulBlogpost.edges.map(({ node }, index) => (
            <BlogPost key={index} {...node} />
          ))}
        </div>
        <button
          aria-label="scroll-left"
          className={classnames(
            "round-button outline-primary  right-0 translate-x-2",
            { "round-button-invisible": !hasOverflow || !canScrollRight }
          )}
          onMouseUp={() => scroll("300")}
        >
          <LongArrowRight />
        </button>
      </div>
    </section>
  )
}

export default injectIntl(Blog)
