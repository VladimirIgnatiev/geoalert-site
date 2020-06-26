import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "EN",
  ru: "RU",
}

const Language = ({ className }) => (
  <div>
    <IntlContextConsumer>
      {({ language }) => {
        const toggleLanguage = () =>
          language === "en" ? changeLocale("ru") : changeLocale("en")
        return (
          <button className={className} key={language} onClick={toggleLanguage}>
            {languageName[language]}
          </button>
        )
      }}
    </IntlContextConsumer>
  </div>
)

export default Language
