import React from 'react';

const VideosPage = ({ videos, onHandleSelectVideo, selectedVideo }) => {
    return (
        <div className="col-md-6">
            <h2>Videos</h2>
            <div className="selected-video">
                <div key={selectedVideo.id}>
                    <h6 className="title">{selectedVideo.description}</h6>
                    <video controls src={selectedVideo.mediaUrl} alt={selectedVideo.title} />
                </div>
            </div>
            <div className="video-thumbnail">
                {
                    videos.map((video, i) => (
                        <div key={i} onClick={()=>{onHandleSelectVideo(video)}}>
                            <video controls src={video.mediaUrl} alt={video.description} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default VideosPage;