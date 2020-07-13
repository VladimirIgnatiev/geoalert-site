import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import SEO from "../components/seo"

const NotFoundPage = ({ intl }) => {
  if (typeof window !== "undefined") {
    window.location = "/"
  }

  return (
    <SEO
      title={intl.formatMessage({ id: "main.title" })}
      description={intl.formatMessage({ id: "main.description" })}
    />
  )
}

export default injectIntl(NotFoundPage)
