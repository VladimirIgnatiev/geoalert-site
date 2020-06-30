import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import AnchorButton from "./anchor-button"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

const Main = ({ intl }) => {
  const { allContentfulAsset } = useStaticQuery(graphql`
    {
      allContentfulAsset(filter: { title: { eq: "ga-site/main-image" } }) {
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
    <section className="container mx-auto px-4 bg-white flex flex-col lg:flex-row lg:pb-20">
      <div className="flex-0 md:flex-1 bg-white">
        <div className="xl:max-w-xl lg:max-w-md max-w-full">
          <h1
            className={`
              leading-tight font-bold font-roboto-slab text-gray-900
              mt-8 md:mt-6 lg:mt-10 xl:mt-12
              text-3xl sm:text-4xl xl:text-5xl
            `}
          >
            <FormattedMessage id="main.title" />
          </h1>
          <p
            className={`
              mt-6 md:mt-5 lg:mt-8 xl:mt-10
              text-gray-800 font-sans
              text-base sm:text-xl xl:text-2xl
            `}
          >
            <FormattedMessage id="main.subtitle" />
          </p>
          <AnchorButton
            asLink
            link="https://demo.geoalert.io"
            className={`
              inline-block 
              mt-5 lg:mt-8 xl:mt-10
              bg-primary active:bg-primary-light 
              uppercase text-white font-bold 
              text-xs md:text-sm
              w-full lg:w-auto
              py-3 lg:py-4
              px-6 lg:px-8 
            `}
            text={intl.formatMessage({ id: "try-demo" })}
          />
        </div>
      </div>
      <div className="flex-1 bg-white mt-8 lg:mt-0">
        <Img
          className="shadow-2xl"
          fluid={allContentfulAsset.edges[0].node.fluid}
        />
      </div>
    </section>
  )
}

export default injectIntl(Main)
