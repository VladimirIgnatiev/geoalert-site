import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  "en-US": "EN",
  "ru-RU": "RU",
}

const Language = ({ className, onToggle }) => (
  <div>
    <IntlContextConsumer>
      {({ language }) => {
        const toggleLanguage = () => {
          onToggle()
          language === "en-US" ? changeLocale("ru-RU") : changeLocale("en-US")
        }
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
