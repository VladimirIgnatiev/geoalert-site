import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

const Contacts = () => {
  const { allContentfulAsset } = useStaticQuery(graphql`
    {
      allContentfulAsset(filter: { title: { eq: "ga-site:contacts-map" } }) {
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
    <section className="relative h-112 lg:h-128">
      <Img
        className="absolute inset-0 h-full"
        title="contacts"
        fluid={allContentfulAsset.edges[0].node.fluid}
      />
      <div className="contacts-block mx-auto">
        <p>
          <FormattedMessage id="contacts.name" />
        </p>
        <p>
          <FormattedMessage id="contacts.location1" />
        </p>
        <p>
          <FormattedMessage id="contacts.location2" />
        </p>
        <p>
          <FormattedMessage id="contacts.phone" />
        </p>
        <p>
          <FormattedMessage id="contacts.email" />
        </p>
      </div>
      <div className="point-container">
        <div className="circle">
          <div className="core"></div>
        </div>
      </div>
    </section>
  )
}

export default injectIntl(Contacts)
