import React from "react"
import ArrowRight from "../icons/arrow-right"

function AnchorButton({
  text,
  onClick,
  className,
  link = "#",
  asButton = true,
  blank = true,
}) {
  const Tag = asButton ? "button" : "a"
  const props = asButton
    ? {
        onClick,
      }
    : {
        href: link,
        target: blank ? "_blank" : "",
        rel: "noopener noreferrer",
      }

  return (
    <Tag {...props} className={className}>
      <span>{text}</span> <ArrowRight className="inline-block ml-3" />
    </Tag>
  )
}

export default AnchorButton
