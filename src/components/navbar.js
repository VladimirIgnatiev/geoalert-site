import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

import Language from "./language"

const Navbar = () => {
  const { site } = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          menuLinks {
            id
            link
          }
        }
      }
    }
  `)
  return (
    <nav>
      <ul className="flex m-0">
        {site.siteMetadata.menuLinks.map(({ id, link }) => (
          <li key={id} className="navbar-item">
            <Link to={link}>
              <FormattedMessage id={id} />
            </Link>
            <div className="slide"></div>
          </li>
        ))}
        <li className="navbar-item">
          <Language />
        </li>
      </ul>
    </nav>
  )
}

export default injectIntl(Navbar)
