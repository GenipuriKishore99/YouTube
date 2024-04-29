import React from 'react'

const VideosList = ({info}) => {
    if(!info){
        return(
            <div><h2>No information found</h2></div>
        )
    }
    const {snippet ={},statistics={}} =info;
    const {channelTitle="Unknown",title="Unknown",thumbnails={}} =snippet;


    
    
  return (
    <div>
    
        <div className='card  m-2 p-2 shadow-lg' style={{width:"18rem"}}>
            <div className='card-header'>
            <img src={thumbnails.medium.url}alt="img" className='card-img-top'/>

            </div>
            <div className='card-body'>
            <h6 className='card-title'>{channelTitle}</h6>
            <p>{title}</p>
            </div>
            <div className='card-footer'>
                <p className='bi bi-view-list'>Views:{statistics.viewCount}</p>
                <span className='bi bi-hand-thumbs-up-fill me-3'></span>
                <span className='bi bi-chat-fill'></span>

            </div>
            
            
        </div>
        
      
        
        
    </div>
  )
};
export const AdVideo=({info})=>{
    return(
        <div className='border border-1 border-primary p-1 m-2'>
            <VideosList/>

        </div>
    )
}


export default VideosList