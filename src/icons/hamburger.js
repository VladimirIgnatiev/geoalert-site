import React from "react"

function Hamburger(props) {
  return (
    <svg width={23} height={16} viewBox="0 0 23 16" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.667V0h22.876v2.667H0zm0 4v2.666h22.876V6.667H0zm0 6.666V16h22.876v-2.667H0z"
        fill="#292929"
      />
    </svg>
  )
}

export default Hamburger
