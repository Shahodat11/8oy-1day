import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { incCounter } from '../../lib/action/action'

const Banner = () => {
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Banner</h2>
      <button onClick={() => dispatch (incCounter())}>INC</button>
    </div>
  )
}

export default Banner
