import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function GetAxios() {
    const [name,steName]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3001/user`)
        .then((res)=>
        {
            const store=res.data;
            steName(store)
        })
    })

  return (
    <div>
      <h1>
        Axions Get

      </h1>
      {name.map((person)=><li key="person"> {person.name}</li>)}
    </div>
  )
}
