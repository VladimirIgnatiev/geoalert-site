import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import AnchorButton from "./anchor-button"
import PdfFile from "../icons/pdf-file"

const Products = ({ intl }) => {
  const { allContentfulAsset } = useStaticQuery(graphql`
    {
      allContentfulAsset(
        filter: { title: { eq: "ga-site/urban-mapping-product" } }
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
    <section id="products" className="mt-12 lg:mt-24">
      <div className="container mx-auto flex justify-between flex-col lg:flex-row">
        <div className="flex-1 flex items-center">
          <div className="max-w-full lg:max-w-md">
            <h2 className="font-roboto-slab font-bold text-primary text-2xl lg:text-4xl">
              <FormattedMessage id="products.urban-mapping.title" />
            </h2>
            <p className="mt-5 font-roboto text-base lg:text-lg">
              <FormattedMessage id="products.urban-mapping.description" />
            </p>
            {/* flex-col sm:flex-row sm:items-center justify-between */}
            <div className="flex flex-wrap sm:items-center justify-between text-secondary mt-5">
              <AnchorButton
                link="https://geoalert.github.io/urban-mapping/"
                className="font-semibold pb-1 border-b-2 border-solid transition duration-200 ease-in border-white hover:border-secondary"
                arrowClassName="fill-current text-secondary"
                text={intl.formatMessage({
                  id: "products.urban-mapping.link",
                })}
              />
              <a
                href="https://geoalert.github.io/urban-mapping/"
                target="_blank"
                rel="noreferrer"
                className="w-auto xs:w-full mt-5 sm:mt-0"
              >
                <PdfFile className="inline-block" />
                <span className="text-primary ml-4 font-semibold">
                  <FormattedMessage id="products.urban-mapping.download" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-8 lg:mt-0">
          <Img
            className="shadow-2xl xl:max-w-product-image ml-auto"
            title={intl.formatMessage({ id: "main.title" })}
            fluid={allContentfulAsset.edges[0].node.fluid}
          />
        </div>
      </div>
      <div></div>
    </section>
  )
}

export default injectIntl(Products)
