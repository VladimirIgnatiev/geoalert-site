/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"

function SEO({ description, lang, meta, title, intl }) {
  const data = useStaticQuery(
    graphql`
      {
        site: site {
          siteMetadata {
            title
            description
            author
          }
        }
        mainImage: allContentfulAsset(
          filter: { title: { eq: "ga-site:main-image-2x" } }
        ) {
          edges {
            node {
              fluid(
                quality: 30
                maxWidth: 300
                maxHeight: 200
                resizingBehavior: FILL
              ) {
                srcWebp
              }
            }
          }
        }
      }
    `
  )
  const metaDescription = description || data.site.siteMetadata.description
  const image = data.mainImage.edges[0].node.fluid.srcWebp
  console.log({ image })

  return (
    <Helmet
      htmlAttributes={{ lang: intl.locale }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: `https://${image}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en-US`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default injectIntl(SEO)
