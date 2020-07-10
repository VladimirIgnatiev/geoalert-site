import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import MainLogo from "./main-logo"
import Github from "../icons/github"
import Medium from "../icons/medium"
import Twitter from "../icons/twitter"
import Facebook from "../icons/facebook"

const Footer = () => {
  return (
    <footer id="contacts" className="py-12 lg:py-16 container mx-auto">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <MainLogo />
        <div className="mt-8 sm:mt-0 sm:order-1 grid grid-rows-1 grid-cols-4 col-gap-2">
          <a
            title="twitter"
            className="w-8 h-8 flex items-center justify-center"
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/geoalert"
          >
            <Twitter className="text-black fill-current hover:text-secondary" />
          </a>
          <a
            title="facebook"
            className="w-8 h-8 flex items-center justify-center"
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/GeoAlertLtd/"
          >
            <Facebook className="text-black fill-current hover:text-secondary" />
          </a>
          <a
            title="github"
            className="w-8 h-8 flex items-center justify-center"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Geoalert"
          >
            <Github className="text-black fill-current hover:text-secondary" />
          </a>
          <a
            title="medium"
            className="w-8 h-8 flex items-center justify-center"
            rel="noreferrer"
            target="_blank"
            href="https://medium.com/@geoalert"
          >
            <Medium className="text-black fill-current hover:text-secondary" />
          </a>
        </div>
        <p className="text-black mt-8 sm:mt-0">
          Copyright © geoalert.io 2019-2020
        </p>
      </div>
    </footer>
  )
}

export default injectIntl(Footer)
