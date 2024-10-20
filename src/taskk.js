import { getDefaultNormalizer } from "@testing-library/react"
import { useEffect, useState } from "react"

function App1(){
  // const date = new date();
  const[count,setcount]=useState(0)
  function time(){
    setcount(count+1)
  }
  useEffect(()=>{
    const timer=setInterval(time,1000)
    return(()=>clearInterval(timer)
    )
  })

  return(
    <h1>{Math.floor(count/3600)}H {Math.floor(count/60)}M {Math.floor(count)}S</h1>
  )
}

export default App1;