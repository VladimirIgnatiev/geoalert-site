import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import Play from "../icons/play"
import Modal from "../components/modal"

const WhatIs = ({ intl }) => {
  const { allContentfulAsset } = useStaticQuery(graphql`
    {
      allContentfulAsset(
        filter: { title: { eq: "ga-site/video-placeholder" } }
      ) {
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
  const [isOpen, setIsOpen] = React.useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  return (
    <>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <div className="relative container px-0 w-72 xs:w-256 shadow-2xl pb-7/12 ">
          <iframe
            className="absolute inset-0"
            title={intl.formatMessage({ id: "whatIs.title" })}
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/HUGEWmJ9Mco??autoplay=0&showinfo=0&controls=0"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
      <section id="company" className="bg-white mt-12 md:mt-32 md:pt-5">
        <div className="container mx-auto text-center sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          <h2 className="title">
            <FormattedMessage id="whatIs.title" />
          </h2>
          <p className="description mt-3">
            <FormattedMessage id="whatIs.description" />
          </p>
        </div>
        <div className="relative mt-24 md:mt-32">
          <div className="bg-tertiary pb-1/2 sm:pb-5/12 md:pb-4/12 lg:pb-4/12 xl:pb-128">
            <div
              className="
            h-full
            absolute inset-0 mx-auto px-4 transform -translate-y-12 sm:-translate-y-16 lg:-translate-y-24
            container sm:max-w-xl md:max-w-2xl lg:max-w-3xl 3xl:max-w-4xl"
            >
              <div className="w-full h-full bg-teal-500 shadow-xl relative flex justify-center items-center">
                <Img
                  className="absolute inset-0 w-full h-full"
                  title={intl.formatMessage({ id: "whatIs.title" })}
                  fluid={allContentfulAsset.edges[0].node.fluid}
                />
                <button
                  aria-label="play-video"
                  onClick={handleOpen}
                  className="absolute try-button px-10 py-6"
                >
                  <Play />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default injectIntl(WhatIs)
