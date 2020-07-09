import React from "react"
import classnames from "classnames"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import AnchorButton from "../components/anchor-button"

const Statuses = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
}

const Subscribe = ({ intl }) => {
  // const [error, setError] = React.useState()
  const [status, setStatus] = React.useState("")
  const [email, setEmail] = React.useState("")

  const isSuccess = status === Statuses.SUCCESS
  const isLoading = status === Statuses.LOADING

  const disableControls = isSuccess || isLoading
  const handleEmailChange = e => setEmail(e.target.value)
  const handleSubmit = async e => {
    e.preventDefault()
    if (email && !disableControls) {
      setStatus(Statuses.LOADING)
      const { result, msg } = await addToMailchimp(email)
      console.log(result, msg)
      if (result === Statuses.ERROR) alert(`Error: ${msg.split(". ")[0]}`)
      setStatus(result)
    }
  }

  const submitText = isLoading
    ? intl.formatMessage({ id: "subscribe.onSubscribing" })
    : isSuccess
    ? intl.formatMessage({ id: "subscribe.onSubscribeSuccess" })
    : intl.formatMessage({ id: "subscribe.submitButton" })
  return (
    <section className="bg-secondary py-10 lg:py-16 ">
      <div
        className="container mx-auto 
      flex flex-col lg:flex-row items-center 
      justify-center lg:justify-between"
      >
        <div className="text-center lg:text-left">
          <h2 className="title text-white">
            <FormattedMessage id="subscribe.title" />
          </h2>
          <p className="description text-gray-200">
            <FormattedMessage id="subscribe.description" />
          </p>
        </div>
        <form
          className="w-full lg:max-w-xl 
          flex flex-col lg:flex-row lg:justify-between items-center
          mt-6 lg:mt-0"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className="w-full">
            <span className="invisible">Email</span>
            <input
              className={classnames(
                "w-full lg:w-104 px-4 py-3 rounded-sm outline-primary",
                { "cursor-not-allowed": disableControls }
              )}
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder={intl.formatMessage({
                id: "subscribe.inputPlaceholder",
              })}
              disabled={disableControls}
            />
          </label>
          <AnchorButton
            asButton
            type="submit"
            className={classnames(
              "w-full lg:w-auto bg-primary py-3 px-5 mt-6 lg:mt-0 text-white uppercase lg:ml-5 outline-primary",
              {
                "bg-opacity-75": isSuccess,
                "cursor-not-allowed": disableControls,
                "hover:bg-primary-light": !disableControls,
              }
            )}
            text={submitText}
            hideArrow={disableControls}
            disabled={disableControls}
          />
        </form>
      </div>
    </section>
  )
}

export default injectIntl(Subscribe)
