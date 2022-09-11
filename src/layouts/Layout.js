import React, { Fragment, useState } from 'react'
import Component1 from '../components/Component1'
import Student from '../components/Student'
// state
// useState la mot hook

export default function Layout() {
  const name = 'Giang'
  const handleMultiplication = {
    multi: () => null,
    division: (age, setAge) => {
      return setAge(age / 2)
    }
  }
  return (
    <Fragment>
      {/* <div>Layout</div> */}
      {/* <Component1
        name={name}
        division={handleMultiplication.division}
      /> */}
      <Student />
    </Fragment>

  )
}
