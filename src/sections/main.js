import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import AnchorButton from "../components/anchor-button"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

const Main = ({ intl }) => {
  const { allContentfulAsset } = useStaticQuery(graphql`
    {
      allContentfulAsset(filter: { title: { eq: "ga-site:main-image-2x" } }) {
        edges {
          node {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `)
  return (
    <section className="container mx-auto bg-white flex flex-col lg:flex-row ">
      <div className="flex-0 md:flex-1 bg-white flex items-center">
        <div className="max-w-full lg:max-w-md xl:max-w-lg">
          <h1
            className="leading-tight font-bold font-roboto-slab text-black
            mt-8 md:mt-6 lg:mt-10 xl:mt-12
            text-3xl sm:text-4xl xl:text-5xl"
          >
            <FormattedMessage id="main.title" />
          </h1>
          <p
            className="mt-6 md:mt-5 lg:mt-8 xl:mt-10 lg:pr-4
            font-sans leading-snug text-gray-800
            text-base sm:text-xl xl:text-2xl"
          >
            <FormattedMessage id="main.description" />
          </p>
          <div className="inline-block mt-5 lg:mt-8 xl:mt-10 w-full xs:w-auto">
            <AnchorButton
              link="https://demo.geoalert.io"
              className="try-button try-button-flex"
              text={intl.formatMessage({ id: "tryDemo" })}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white mt-8 lg:mt-0">
        <Img
          loading="eager"
          className="shadow-2xl"
          title={intl.formatMessage({ id: "main.title" })}
          fluid={allContentfulAsset.edges[0].node.fluid}
        />
      </div>
    </section>
  )
}

export default injectIntl(Main)
