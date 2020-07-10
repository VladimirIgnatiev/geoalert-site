import React from "react"
import SEO from "../components/seo"

const NotFoundPage = () => {
  if (typeof window !== "undefined") {
    window.location = "/"
  }

  return <SEO />
}

export default NotFoundPage
