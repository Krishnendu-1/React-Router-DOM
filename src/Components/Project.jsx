import React from 'react'
import { useParams } from 'react-router-dom'

function Project() {
  const {id}=useParams()
  return (
    <div className=' bg-yellow-300 w-full h-[50vh] flex flex-col justify-center items-center'>
      <i className=' text-5xl'>Wanna see some projects</i>
      <div className=' text-3xl'>userid:{id} </div>
      <div className=' text-3xl'>(Just write "projects/userid/..." anything after "/" in the url.) </div>
    </div>
  )
}

export default Project
