import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import Main from "../components/main"
import SEO from "../components/seo"
import WhatIs from "../components/what-is"

const IndexPage = ({ data, intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "title" })} />
    <Main />
    <WhatIs />
  </Layout>
)

export default injectIntl(IndexPage)

// export query = graphql``
