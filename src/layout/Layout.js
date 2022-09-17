import React, { Fragment } from 'react'
import Component1 from '../components/Component1'
//state
// useState la mot hook

export default function Layout() {
    const name = 'Tin'
  return (
    <Fragment>
        <div>Layout</div>
        
        <Component1
            name={name}
        />
    </Fragment>
  )
}
