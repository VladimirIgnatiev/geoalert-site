import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

const WhatIs = () => {
  return (
    <section id="company" className="bg-white mt-12 md:mt-32 ">
      <div className="container mx-auto text-center px-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
        <h2
          className={`
          font-bold font-roboto-slab
          text-2xl sm:text-3xl xl:text-4xl 
        `}
        >
          <FormattedMessage id="what-is.title" />
        </h2>
        <p
          className={`
          text-base
          mt-3
        `}
        >
          <FormattedMessage id="what-is.subtitle" />
        </p>
      </div>
      <div className="relative mt-24 md:mt-32">
        <div className="bg-tertiary pb-1/2 sm:pb-5/12 md:pb-4/12 lg:pb-4/12">
          <div
            className={`
            absolute inset-0 mx-auto px-4 transform -translate-y-12 sm:-translate-y-16 lg:-translate-y-20 h-full
            sm:max-w-xl md:max-w-2xl lg:max-w-3xl
          `}
          >
            <iframe
              title="What is geoalert?"
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/HUGEWmJ9Mco??autoplay=0&showinfo=0&controls=0"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default injectIntl(WhatIs)
