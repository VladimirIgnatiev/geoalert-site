// import { Link } from "gatsby"
import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"

const Header = () => {
  const { contentfulLogo } = useStaticQuery(graphql`
    query MainLogoQuery {
      contentfulLogo {
        svg {
          file {
            url
          }
        }
      }
    }
  `)

  return (
    <header className="w-full pt-4 absolute top-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link className="inline-block" to="/">
            <img className="m-0" src={contentfulLogo.svg.file.url} alt="logo" />
          </Link>
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default injectIntl(Header)
