import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import SEO from "../components/seo"

const Redirect = ({ intl }) => {
  return (
    <SEO
      title={`${intl.formatMessage({ id: "main.title" })}`}
      description={intl.formatMessage({ id: "main.description" })}
    />
  )
}

export default injectIntl(Redirect)
