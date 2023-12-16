import React from 'react'

export default function List3() {
    const college=[{id:1,name:"Sanji",age:21},
    {id:2,name:"Zoro",age:21},
    {id:3,name:"Robin",age:30}
]

const ans=college.map((col)=><li key={col.id}>{col.name} {col.age} </li>)
  return (
    <div>
      <h1>
        <h3>Strawhats</h3>
        {ans}
      </h1>
    </div>
  )
}
