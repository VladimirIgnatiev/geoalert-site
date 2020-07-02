import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

const WhatIs = ({ intl }) => {
  return (
    <section id="company" className="bg-white mt-12 md:mt-32">
      <div className="container mx-auto text-center sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
        <h2 className="title">
          <FormattedMessage id="what-is.title" />
        </h2>
        <p className="description mt-3">
          <FormattedMessage id="what-is.description" />
        </p>
      </div>
      <div className="relative mt-24 md:mt-32">
        <div className="bg-tertiary pb-1/2 sm:pb-5/12 md:pb-4/12 lg:pb-4/12 xl:pb-128">
          <div
            className="
            h-full
            absolute inset-0 mx-auto px-4 transform -translate-y-12 sm:-translate-y-16 lg:-translate-y-20
            container sm:max-w-xl md:max-w-2xl lg:max-w-3xl 3xl:max-w-4xl"
          >
            <iframe
              className="shadow-xl"
              title={intl.formatMessage({ id: "what-is.title" })}
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
