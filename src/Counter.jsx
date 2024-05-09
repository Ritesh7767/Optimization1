import React, { memo, useState } from 'react'

const Counter = ({counter, INCREMENT, DECREMENT}) => {

    console.log('counter')

  return (
    <div>
        <h1>Counter value :- {counter} </h1>
        <button onClick={INCREMENT} >+</button>
        <button onClick={DECREMENT} >-</button>
    </div>
  )
}

export default memo(Counter)