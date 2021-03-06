import React, { Fragment } from 'react'
import spinner from './spinner.gif'

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt="loading..."
      style={{ width: '200px', margin: 'auto', dislay: 'block' }}
    />
  </Fragment>
)

export default Spinner
