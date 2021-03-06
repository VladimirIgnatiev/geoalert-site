import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

const Partners = () => {
  const { contentfulPartners } = useStaticQuery(graphql`
    {
      contentfulPartners {
        partnerList {
          file {
            fileName
            url
          }
        }
      }
    }
  `)
  return (
    <section
      id="partners"
      className="container mx-auto flex flex-col my-12 lg:mt-24"
    >
      <div className="text-center">
        <h2 className="title">
          <FormattedMessage id="partners.title" />
        </h2>
        <p className="description">
          <FormattedMessage id="partners.description" />
        </p>
      </div>
      <div className="mt-0 lg:mt-8 flex flex-row flex-wrap justify-between items-center ">
        {contentfulPartners.partnerList.map(({ file }, index) => (
          <div
            key={index}
            className="mt-8 mx-auto relative flex items-center justify-center"
            style={{
              width: "163px",
              height: "65px",
            }}
          >
            <img
              alt={file.fileName.split(":")[2].split(".")[0]}
              loading="lazy"
              src={file.url}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default injectIntl(Partners)
