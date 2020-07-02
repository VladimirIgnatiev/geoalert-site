import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import AnchorButton from "./anchor-button"

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
            <h2 className="font-roboto-slab font-bold text-secondary text-2xl lg:text-4xl">
              <FormattedMessage id="products.map-flow.title" />
            </h2>
            <p className="mt-5 font-sans text-base lg:text-lg text-gray-900">
              <FormattedMessage id="products.map-flow.description" />
            </p>
            <div className="flex flex-wrap text-secondary mt-5">
              <AnchorButton
                link="https://demo.geoalert.io"
                className="inline-block 
                mt-5 lg:mt-8 xl:mt-10
                transition-colors duration-200
                bg-primary hover:bg-primary-light shadow
                uppercase text-white font-bold text-center
                text-xs md:text-sm
                w-full xs:w-1/2 sm:w-1/3 lg:w-auto
                py-3 lg:py-4
                px-6 lg:px-8"
                text={intl.formatMessage({ id: "try-demo" })}
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
