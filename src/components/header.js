import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"
import createPersistedState from "use-persisted-state"

import Language from "./language"
import MainLogo from "../icons/main-logo"
import Hamburger from "../icons/hamburger"
import Cross from "../icons/cross"

const useNavState = createPersistedState("nav-expanded")
const Header = () => {
  const { site } = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          menuLinks {
            id
            slug
          }
        }
      }
    }
  `)

  const [isNavExpanded, setIsNavExpanded] = useNavState(false)
  const expandNav = () => setIsNavExpanded(true)
  const collapseNav = () => setIsNavExpanded(false)
  const toggleNav = isNavExpanded ? collapseNav : expandNav

  useBreakpoint(`(min-width: 1024px)`, collapseNav)

  return (
    <header
      className={`w-full absolute top-0 z-10 bg-white ${
        isNavExpanded ? "h-screen sticky" : ""
      }`}
    >
      <div className="container w-full h-full mx-auto p-4 flex flex-col justify-between">
        <nav className="flex items-center justify-between flex-wrap">
          <div className="flex-shrink-0">
            <Link to="/">
              <MainLogo />
            </Link>
          </div>
          <div className="block lg:hidden">
            <button
              className="flex items-center p-2 rounded"
              onClick={toggleNav}
            >
              {isNavExpanded ? <Cross /> : <Hamburger />}
            </button>
          </div>
          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto mt-6 lg:mt-0 ${
              isNavExpanded ? "" : "hidden lg:block"
            }`}
          >
            <ul className="lg:flex-grow lg:flex lg:justify-end">
              {site.siteMetadata.menuLinks.map(({ id, link }) => (
                <li key={id} className="navbar-item">
                  <Link to={link} onClick={isNavExpanded && collapseNav}>
                    <FormattedMessage id={id} />
                  </Link>
                  <div className="slide hidden lg:block"></div>
                </li>
              ))}
              <li className="navbar-item mr-0">
                <Language />
              </li>
            </ul>
          </div>
        </nav>
        {isNavExpanded && (
          <a
            className="lg:hidden mb-8 text-primary font-bold"
            href="tel:123-456-7890"
          >
            +7 (800) 201 28 19
          </a>
        )}
      </div>
    </header>
  )
}

export default injectIntl(Header)

export function useBreakpoint(query, callback) {
  const callbackRef = useRef(callback)
  useEffect(() => {
    const cb = callbackRef.current
    const handleResize = () => {
      if (window.matchMedia(query).matches) cb(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })
}
