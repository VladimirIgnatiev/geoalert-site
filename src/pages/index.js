import React from "react"
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../sections/main"
import WhatIs from "../sections/what-is"
import Product1 from "../sections/product-1"
import Product2 from "../sections/product-2"
import Partners from "../sections/partners"
import Blog from "../sections/blog"

const IndexPage = ({ intl, data }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "title" })} />
    <Main />
    <WhatIs />
    <Product1 />
    <Product2 />
    <Partners />
    <Blog data={data} />
  </Layout>
)

export default injectIntl(IndexPage)

export const query = graphql`
  query blogPosts($language: String!) {
    allContentfulBlogpost(filter: { node_locale: { eq: $language } }) {
      edges {
        node {
          node_locale
          title
          date
          writtenBy
          image {
            fluid(maxWidth: 413) {
              ...GatsbyContentfulFluid
            }
          }
          postUrl {
            postUrl
          }
        }
      }
    }
  }
`
