import React from 'react'

function DisplayName(props)
{
    return(
    <div>
        <h1>
            {props.name}
        </h1>
    </div>
    )
}

export default function List2() {
    const student=["Crocodile","Mihawk","Boa Hancok","Teach","Kuma","Doflamingo","Buggy","Jinbea","moria","Weeble"]
    const stName=student.map((stu)=><DisplayName name={stu}></DisplayName>)
  return (
    <div>
      {stName}
    </div>
  )
}
