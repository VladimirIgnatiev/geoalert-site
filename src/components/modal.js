import React from "react"

const Modal = ({ children, isOpen, handleClose }) => {
  return (
    <div
      role="dialog"
      className={`z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center transition-opacity ease-in duration-200 ${
        !isOpen ? "opacity-0 pointer-events-none" : ""
      }`}
    >
      <div
        role="button"
        aria-label="close the dialog"
        tabIndex="0"
        onKeyDown={handleClose}
        onClick={handleClose}
        className="absolute w-full h-full bg-gray-900 opacity-50"
      ></div>
      <div className="mx-auto z-50 flex items-center justify-center">
        {isOpen && children}
      </div>
    </div>
  )
}

export default Modal
