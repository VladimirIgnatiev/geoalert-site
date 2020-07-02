import React from "react"
import ArrowRight from "../icons/arrow-right"

function AnchorButton({
  text,
  onClick,
  className,
  link = "#",
  blank = true,
  asButton = false,
  arrowClassName = "",
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
    <Tag
      {...props}
      className={`group flex items-center justify-center flex-grow-0 ${className}`}
    >
      <span>{text}</span>{" "}
      <ArrowRight
        className={`transition-transform ease-in duration-200 inline-block ml-3 transform group-hover:translate-x-1 ${arrowClassName}`}
      />
    </Tag>
  )
}

export default AnchorButton
