import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Github() { 
    const userdata= useLoaderData();
    const navigation=useNavigate();
    if(navigation.state==='loading') {
      console.log("loading")
      return <div>loading</div>}
  return (
    <div className=' bg-green-200 w-full h-[50vh] flex justify-center items-center flex-col text-xl text-justify p-5'>
      <div>GitHub Bio:{userdata.bio}</div>
     <div className=' flex justify-center items-center flex-col'>
      Github image:
      <img src={userdata.avatar_url} alt="image" width={200} />
     </div>
    </div>
  )
}

export default Github
export const fetchAPI= async()=>{
    const response= await axios.get('https://api.github.com/users/Krishnendu-1');
    console.log(response.data.bio)
    return (response.data);//only by using () this we can fix the api problem.
}
