import React, {memo} from 'react'

const Timer = ({timer, start, stop, reset}) => {

    console.log('timer')

  return (
    <>
        <h1>{timer}</h1>
        <button onClick={start} >Start</button>
        <button onClick={stop} >Stop</button>
        <button onClick={reset} >Reset</button>
    </>
  )
}

export default memo(Timer)