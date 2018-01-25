import React from 'react';
import VideoListItem from './video-list-item';

//const VideoList = (props) =>{
const VideoList = ({ videos,selectVideo }) => {
    //const videos=props.videos;
    if(!videos){
        return 'Loading......';
    }
    const listOfVideos=videos.map((video)=>{
        return (
            <VideoListItem key={video.etag} video={video} selectVideo={selectVideo}/>
        );
    });
    return (
        <div>
            <ul className='video-list col-md-4 list-group'>
                {listOfVideos}
            </ul>
        </div>
    );
}

export default VideoList;