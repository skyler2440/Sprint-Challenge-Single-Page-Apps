import React from 'react'

export default function LocationCard ({ name, type, dimension, residents }) {
  
  return (<span>{name} {type} {dimension}
  {/* {residents} */}
  </span>
  )
}
