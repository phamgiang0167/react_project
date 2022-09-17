import React, { Children } from 'react'
import PropTypes from 'prop-types'

function ChildComponent(props) {
  return (
    <div>
      <button>+</button>
      {props.children}
      <button>-</button>
    </div>
  )
}

ChildComponent.propTypes = {}

export default ChildComponent
