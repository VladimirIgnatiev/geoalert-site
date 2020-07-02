import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import Main from "../components/main"
import SEO from "../components/seo"
import WhatIs from "../components/what-is"
import Product1 from "../components/product-1"
import Product2 from "../components/product-2"
import Partners from "../components/partners"

const IndexPage = ({ data, intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "title" })} />
    <Main />
    <WhatIs />
    <Product1 />
    <Product2 />
    <Partners />
  </Layout>
)

export default injectIntl(IndexPage)
