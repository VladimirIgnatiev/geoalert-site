import React from "react"
import debounce from "lodash.debounce"

export const useScrollableContainer = ({
  containerRef,
  scrollBehaviour = "smooth",
}) => {
  const [state, setState] = React.useReducer((s, a) => ({ ...s, ...a }), {
    hasOverflow: false,
    canScrollLeft: false,
    canScrollRight: false,
  })

  const checkForOverflow = React.useCallback(() => {
    const { scrollWidth, clientWidth } = containerRef.current
    const hasOverflow = scrollWidth > clientWidth
    setState({ hasOverflow })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const checkForScrollPosition = React.useCallback(() => {
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
    setState({
      canScrollLeft: scrollLeft > 0,
      canScrollRight: scrollLeft !== scrollWidth - clientWidth,
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const scrollContainerBy = React.useCallback(
    distance => {
      containerRef.current.scrollBy({
        left: distance,
        behavior: scrollBehaviour,
      })
    },
    [scrollBehaviour] // eslint-disable-line react-hooks/exhaustive-deps
  )

  React.useEffect(() => {
    const container = containerRef.current
    if (!container) return
    checkForOverflow()
    checkForScrollPosition()

    const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200)
    container.addEventListener("scroll", debounceCheckForScrollPosition)

    return () => {
      debounceCheckForScrollPosition.cancel()

      container.removeEventListener("scroll", debounceCheckForScrollPosition)
    }
  }, [checkForOverflow, checkForScrollPosition]) // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleResize = debounce(() => {
      checkForOverflow()
      checkForScrollPosition()
    }, 200)
    window.addEventListener("resize", handleResize)
    return () => {
      handleResize.cancel()
      window.removeEventListener("resize", handleResize)
    }
  }, [checkForOverflow, checkForScrollPosition]) // eslint-disable-line react-hooks/exhaustive-deps

  return {
    scroll: scrollContainerBy,
    hasOverflow: state.hasOverflow,
    canScrollLeft: state.canScrollLeft,
    canScrollRight: state.canScrollRight,
  }
}
