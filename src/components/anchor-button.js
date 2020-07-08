import React from "react"
import classnames from "classnames"
import ArrowRight from "../icons/arrow-right"

function AnchorButton({
  text,
  onClick,
  className,
  link = "#",
  blank = true,
  asButton = false,
  arrowClassName = "",
  hideArrow = false,
  disabled = false,
  ...restProps
}) {
  const Tag = asButton ? "button" : "a"
  const props = asButton
    ? {
        onClick,
        ...restProps,
      }
    : {
        href: link,
        target: blank ? "_blank" : "",
        rel: "noopener noreferrer",
        ...restProps,
      }

  return (
    <Tag
      {...props}
      className={classnames(
        "group flex items-center justify-center flex-grow-0",
        className
      )}
    >
      <span>{text}</span>{" "}
      {!hideArrow && (
        <ArrowRight
          className={`transition-transform ease-in duration-200 inline-block ml-3 transform group-hover:translate-x-1 ${arrowClassName}`}
        />
      )}
    </Tag>
  )
}

export default AnchorButton
