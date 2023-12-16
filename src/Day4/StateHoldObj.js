import React, { useState } from 'react'

export default function StateHoldObj() {
    const[trip,setcollege]=useState({message:"Good Morning", place:"beach", fees:5000, date: 2023
    })

    const updatePlace=()=>{
        setcollege({...trip,place:"forest",fees:6000})}
        

    return (
      <div>
        <h1>{trip.message}</h1>
        <h1>my Trip place  is {trip.place}</h1>
        <h1>my Trip fees is {trip.fees}</h1>
        <h1>my trip planned year is {trip.date}</h1>
        <button onClick={updatePlace} style={{background:"yellow" }}>Click</button>
      </div>
    )
}


