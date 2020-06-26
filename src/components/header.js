// import { Link } from "gatsby"
import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Navbar from "./navbar"

const Header = () => {
  const { allContentfulLogo } = useStaticQuery(graphql`
    {
      allContentfulLogo(filter: { shortTitle: { eq: "ga-main-logo" } }) {
        edges {
          node {
            title
            image {
              fluid(quality: 100) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <header className="w-full pt-4 absolute top-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link className="inline-block flex-shrink-0" to="/">
            <Img
              fadeIn
              className="logo-sm sm:logo-md"
              fluid={allContentfulLogo.edges[0].node.image.fluid}
            />
          </Link>
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default injectIntl(Header)

// const { contentfulLogo } = useStaticQuery(graphql`
//   query MainLogoQuery {
//     contentfulLogo {
//       svg {
//         file {
//           url
//         }
//       }
//     }
//   }
// `)
// {/* <img className="m-0" src={contentfulLogo.svg.file.url} alt="logo" /> */}
