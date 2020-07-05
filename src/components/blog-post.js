import React from "react"
import Img from "gatsby-image"
import { injectIntl, FormattedDate, FormattedMessage } from "gatsby-plugin-intl"

const BlogPost = ({ image, date, title, writtenBy, postUrl }) => {
  if (!image) return null
  return (
    <a
      className="block px-2"
      href={postUrl.postUrl}
      target="_blank"
      rel="noreferrer"
    >
      <Img
        title={title}
        fluid={image.fluid}
        // style={{ width: "413px", height: "290px" }}
        className="space-x-1 w-72 lg:w-96 shadow"
      />
      <p className="text-secondary mt-5">
        <FormattedDate value={date} year="numeric" month="long" day="numeric" />
      </p>
      <h3 className="mt-2 title text-lg">{title}</h3>
      <p className="mt-2">
        <span className="uppercase">
          <FormattedMessage id="blog.writtenBy" />
        </span>
        &nbsp;
        <span className="text-secondary font-semibold">
          {writtenBy.join(", ")}
        </span>
      </p>
    </a>
  )
}

export default injectIntl(BlogPost)
