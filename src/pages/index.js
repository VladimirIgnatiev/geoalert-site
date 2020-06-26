import React from "react"

import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data, intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "title" })} />
    <section className=" h-screen py-10">
      <h1>
        <FormattedMessage id="title" />
      </h1>
      <p>
        <FormattedMessage id="description" />
      </p>
    </section>
  </Layout>
)

export default injectIntl(IndexPage)

// export query = graphql``
