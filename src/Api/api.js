import axios from 'axios';


const FLICKR_API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
const SHUTTER_AUTH_TOKEN = 'v2/YUFyQnQwRTVmVnFQOUd6UUNHc2VuUDVXRGNTeEhXZFEvMTgyNDY0MDU2L2N1c3RvbWVyLzMvV25pSGMyQmZyRzJvZDYzdHJWN1g0QUdfM0ZBMTdNQ2xoSWpYOFhDWjVZdTZSQjcySEhmMlh4aE5kUmhlMlY5TTlWY1R1aDNBYkdfSkliSDdQczdoVjF0NkJYVmMtWHBDcElHcG8ycEM2ei1PSzVaeWp3Y3A3aU9nMkVuRnFlMGdKdkZwMlZaTjB5ZFZ0V09sSXRPM1JYLTgwVHhNdGtiVC1PSVB0R2dESzlFTFpqbUllMldyTUdZa2xTb2N6SVR5NEtObThCRUZRYk84NTZlNjFjWlhPUQ';


const shutterAuth = `Bearer ${SHUTTER_AUTH_TOKEN}`;
const authParameters = {
    headers: {'Authorization': shutterAuth}
};

export const shutterStockVideos = (searchQuery) => {
    const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/videos/search?query=${searchQuery}&page=1&per_page=5`;
    return axios.get(SHUTTERSTOCK_API_ENDPOINT, authParameters)
    .then((res) => {
        return res.data.data.map(({id, assets, description}) => ({
            id,
            mediaUrl: assets.preview_mp4.url,
            description
        }));
    });
}

export const flickrImages = (searchQuery) => {
    const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=${searchQuery}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=5`;
    return axios.get(FLICKR_API_ENDPOINT).then(res => {
        return res.data.photos.photo.map(({ farm, server, id, secret, title}) => ({
            id,
            title,
            mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
        }));
    });
};