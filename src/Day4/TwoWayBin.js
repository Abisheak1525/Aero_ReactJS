import React, {useState} from 'react'

export default function TwoWayBin() {
    const[name,setName]=useState("")
    const changeName=(event)=>setName(event.target.value)
  return (
    <div>
        <p>Type Here</p>
      <input onChange={changeName} value={name}></input>
      <p>The name is {name}</p>
    </div>
  )
}
