import React, { useContext } from 'react'
import OneContext from "./Contextfile"

export default function Contextfile3() {
    const data = useContext(OneContext)
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
    </div>
  )
}

