import React, { useState } from 'react'

export default function StateFun() 
{
    const[car,gear]=useState("volvo");
    const changecar=()=>gear("Porche")

    const[count,setCount]=useState(0);
    const incrcount=()=>setCount(count+1)
    const decrcount=()=>setCount(count-1)

    return (
    <div>
      <h1>My car brand is {car} </h1>
      <button onClick={changecar} style={{background:"blue"}}>Click me</button>
      <h1>Count {count}</h1>
      <button onClick={incrcount}style={{background:"green"}}>Increment</button>__
      <button onClick={decrcount}style={{background:"red"}}>Decrement</button>
    </div>
  )
}
