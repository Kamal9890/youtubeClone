import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recomanded from '../../Components/Recomanded/Recomanded'
import { useParams } from 'react-router-dom'

const Video = () => {

  const {videoId,categoryId} = useParams();
  return (
    <div className='play-container'>
      <PlayVideo videoId ={videoId}/>
      <Recomanded categoryId ={categoryId}/>
    </div>
  )
}

export default Video