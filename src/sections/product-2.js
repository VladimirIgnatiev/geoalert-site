import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import AnchorButton from "../components/anchor-button"

const Products = ({ intl }) => {
  const { allContentfulAsset } = useStaticQuery(graphql`
    {
      allContentfulAsset(
        filter: { title: { eq: "ga-site/map-flow-product" } }
      ) {
        edges {
          node {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  return (
    <section className="mt-12 lg:mt-24">
      <div className="container mx-auto flex justify-between flex-col-reverse lg:flex-row">
        <div className="flex-1 mt-8 lg:mt-0">
          <Img
            className="shadow-2xl xl:max-w-product-image mr-auto"
            title={intl.formatMessage({ id: "main.title" })}
            fluid={allContentfulAsset.edges[0].node.fluid}
          />
        </div>
        <div className="flex-1 flex items-center">
          <div className="ml-0 lg:ml-32 max-w-full lg:max-w-md">
            <h2 className="title text-secondary">
              <FormattedMessage id="products.mapFlow.title" />
            </h2>
            <p className="description mt-5">
              <FormattedMessage id="products.mapFlow.description" />
            </p>
            <div className="inline-block mt-5 lg:mt-8 xl:mt-10 w-full xs:w-auto">
              <AnchorButton
                link="https://demo.geoalert.io"
                className="
                transition-colors duration-200
                bg-primary hover:bg-primary-light shadow
                uppercase text-white font-bold text-center
                text-xs md:text-sm
                py-3 lg:py-4
                px-6 lg:px-8"
                text={intl.formatMessage({ id: "tryDemo" })}
              />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  )
}

export default injectIntl(Products)
