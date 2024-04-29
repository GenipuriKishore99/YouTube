import React, { useEffect, useState } from 'react'
import { Api } from '../utils/Constants'
import VideosList, { AdVideo } from './VideosList';
import { Link } from 'react-router-dom';

const Vidoes = () => {

    const [videos,setVideos]=useState([])
    useEffect(()=>{
        api();

    },[])

    const api=async()=>{
        const data=await fetch(Api)
        const res=await data.json()
        
        setVideos(res.items)
    }
  return (
    <div className='d-flex flex-wrap'>
      {videos &&<AdVideo info={videos}/>}
      {
        videos.map((video)=><Link key={video.id} to={"/watch?v= "+video.id}> <VideosList  info={video}/></Link>)
      }
       
    </div>
  )
}

export default Vidoes