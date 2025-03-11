import React from 'react'

const Userid = ({params}:{params:{id:string}}) => {
    const {id} =params
  return (
    <div>Userid page{id}</div>
  )
}

export default Userid