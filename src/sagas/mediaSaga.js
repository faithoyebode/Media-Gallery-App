import { put, call, all } from 'redux-saga/effects';
import { flickrImages, shutterStockVideos } from '../Api/api';
import * as types from '../constants/actionTypes';

export function* searchMediaSaga( payload ){
    try{
        console.log("search query: ", payload);
        const videos = yield call(shutterStockVideos, payload.video);
        const images = yield call(flickrImages, payload.video);
        console.log(videos);
        yield all ([
            put({ type: types.SHUTTER_VIDEOS_SUCCESS, videos }),
            put({ type: types.SELECTED_VIDEO, video: videos[0] }),
            put({ type: types.FLICKR_IMAGES_SUCCESS, images }),
            put({ type: types.SELECTED_IMAGE, image: images[0] }),
        ]);
    }catch(error){
        yield put({ type: types.SEARCH_MEDIA_ERROR, error });
    }
}