import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import AnchorButton from "../components/anchor-button"
import PdfFile from "../icons/pdf-file"

const Products = ({ intl, ...props }) => {
  const data = useStaticQuery(graphql`
    {
      productImage: allContentfulAsset(
        filter: { title: { eq: "ga-site/urban-mapping-product" } }
      ) {
        edges {
          node {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
      pdfLinks: allContentfulAsset(
        filter: {
          title: { in: ["ga-site:um-brochure-ru", "ga-site:um-brochure-en"] }
        }
      ) {
        edges {
          node {
            description
            file {
              url
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
          <div className="max-w-full lg:max-w-lg">
            <h2 className="title text-primary">
              <FormattedMessage id="products.urbanMapping.title" />
            </h2>
            <p className="description mt-5">
              <FormattedMessage id="products.urbanMapping.description" />
            </p>
            {/* flex-col sm:flex-row sm:items-center justify-between */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-secondary mt-5">
              <AnchorButton
                link="https://geoalert.github.io/urban-mapping/"
                className="pb-1 font-semibold 
                border-b-2 border-solid border-white hover:border-secondary 
                transition duration-200 ease-in 
                self-start sm:self-center"
                arrowClassName="fill-current text-secondary"
                text={intl.formatMessage({
                  id: "products.urbanMapping.link",
                })}
              />
              <a
                href="https://geoalert.github.io/urban-mapping/"
                target="_blank"
                rel="noreferrer"
                className="group mt-5 sm:mt-0 block self-start sm:self-center"
              >
                <PdfFile
                  className="inline-block
                  fill-current text-primary group-hover:text-primary-light 
                  transition duration-200 ease-in"
                />
                <span
                  className="ml-4
                  text-primary font-semibold group-hover:text-primary-light
                  transition duration-200 ease-in"
                >
                  <FormattedMessage id="products.urbanMapping.download" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-8 lg:mt-0">
          <Img
            className="shadow-2xl xl:max-w-product-image ml-auto"
            title={intl.formatMessage({ id: "main.title" })}
            fluid={data.productImage.edges[0].node.fluid}
          />
        </div>
      </div>
      <div></div>
    </section>
  )
}

export default injectIntl(Products)
