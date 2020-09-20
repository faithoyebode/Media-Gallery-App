import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectImageAction, searchMediaAction, selectVideoAction } from '../actions/mediaActions';
import PhotoPage from '../components/PhotoPage';
import VideoPage from '../components/VideoPage';
import '../styles/style.css';

const MediaGalleryPage = () => {
    // { images, selectedImage, videos, selectedVideo }
    const dispatch = useDispatch();
    const queryRef = useRef(null);
    const query = queryRef;
    const images = useSelector(state => state.images.images);
    const selectedImage = useSelector(state => state.images.selectedImage);
    const videos = useSelector(state => state.videos.videos);
    const selectedVideo = useSelector(state => state.videos.selectedVideo);


    const handleSelectImage = (selectedImage) => {
        dispatch(selectImageAction(selectedImage));
    }

    const handleSelectVideo = (selectedVideo) => {
        dispatch(selectVideoAction(selectedVideo));
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if(query.current.value !== null){
            dispatch(searchMediaAction(query.current.value));
        }
    }

    useEffect(() => {
        dispatch(searchMediaAction('dance'));
     
    }, 
    //eslint-disable-next-line
    []);
    useEffect(() => {console.log("images: ", images);}, [images]);

    return(
        <div className="container-fluid">
            {
                images && selectedImage ? (
                    <div>
                        <input type="text" ref={queryRef} />
                        <input type="submit" className="btn btn-primary" value="Search Library" onClick={handleSearch} />
                        <div className="row">
                            <PhotoPage images={images} selectedImage={selectedImage} onHandleSelectImage={handleSelectImage} />
                            <VideoPage videos={videos} selectedVideo={selectedVideo} onHandleSelectVideo={handleSelectVideo} />
                        </div>
                    </div>
                ):"loading ........"
            }
        </div>
    );
}

export default MediaGalleryPage;