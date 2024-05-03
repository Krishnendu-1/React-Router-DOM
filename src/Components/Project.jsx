import React from 'react'
import { useParams } from 'react-router-dom'

function Project() {
  const {id}=useParams()
  return (
    <div className=' bg-yellow-300 w-full h-[50vh]'>
      <i>Wanna see some projects</i>
      <div>userid:{id}</div>
    </div>
  )
}

export default Project
