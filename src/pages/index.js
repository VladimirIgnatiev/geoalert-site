import React from "react"

import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import Main from "../components/main"
import SEO from "../components/seo"

const IndexPage = ({ data, intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "title" })} />
    <Main />
  </Layout>
)

export default injectIntl(IndexPage)

// export query = graphql``
