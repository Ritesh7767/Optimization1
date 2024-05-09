import { useState, useCallback, useMemo, useRef, useEffect } from "react"
import Counter from "./Counter"
import Timer from "./Timer";

function App() {

  let [counter, setCounter] = useState(0)
  let [isActive, setIsActive] = useState(false)
  let [timer, setTimer] = useState(0)

  useEffect(()=>{
    let timerId = null
    if(isActive){
      timerId = setInterval(() => setTimer(prev => prev + 1), 1000)
    }
    else{
      if(timerId){
        clearInterval(timerId)
      }
    }

    return () => clearInterval(timerId)
  }, [isActive])

  const start = useCallback(() => setIsActive(true), [])
  const stop = useCallback(() => setIsActive(false), [])
  const reset = useCallback(() => {
    setTimer(0)
    setIsActive(false)
  }, [])

  const INCREMENT = useCallback(() => setCounter(prev => prev + 1), [])
  const DECREMENT = useCallback(() => setCounter(prev => prev - 1), []) 

  console.log('app')

  return (
    <>
      <Counter counter={counter} INCREMENT={INCREMENT} DECREMENT={DECREMENT} />
      <Timer timer={timer} start={start} stop={stop} reset={reset} />
      <h1>hello world</h1>
    </>
  )
}

export default App
