import * as React from "react"

function SvgComponent(props) {
  return (
    <svg width={13} height={24} viewBox="0 0 13 24" fill="#292929" {...props}>
      <path d="M12.61 8.4H8.387V6c0-1.238.1-2.018 1.872-2.018h2.239V.166A31.18 31.18 0 009.218 0C5.966 0 3.593 1.988 3.593 5.64V8.4H0v4.8l3.594-.001V24h4.793V13.196h3.673l.55-4.796z" />
    </svg>
  )
}

export default SvgComponent
