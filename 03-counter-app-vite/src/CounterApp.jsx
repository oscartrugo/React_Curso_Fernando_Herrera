import PropTypes from 'prop-types'
import React from 'react'

export const CounterApp = ({ value }) => {
  return (
    <h1>{ value }</h1>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}
