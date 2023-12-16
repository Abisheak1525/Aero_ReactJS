import React from 'react'

export default function List() {

    const animals=["Shanks","Teach","Buggu","Luffy"]
    const result=animals.map((ani)=><li>{ani}</li>)
  return (
    <div>
      <ul type="none">
        <h1>Emperors of the sea</h1>
        <h2>{result}</h2>
      </ul>
    </div>
  )
}

