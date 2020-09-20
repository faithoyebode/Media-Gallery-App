import React from 'react';

const PhotoPage = ({ images, onHandleSelectImage, selectedImage }) => {
    return (
        <div className="col-md-6">
            <h2>Images</h2>
            <div className="selected-image">
                <div key={selectedImage.id}>
                    <h6>{selectedImage.title}</h6>
                    <img src={selectedImage.mediaUrl} alt={selectedImage.title} />
                </div>
            </div>
            <div className="image-thumbnail">
                {
                    images.map((image, i) => (
                        <div key={i} onClick={()=>{onHandleSelectImage(image)}}>
                            <img src={image.mediaUrl} alt={image.title} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default PhotoPage;