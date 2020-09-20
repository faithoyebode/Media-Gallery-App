import * as types from '../constants/actionTypes';

const initialState = {
    videos: [],
    selectedVideo: {}
}

export default function(state = initialState.videos, action){
    switch(action.type){
        case types.SHUTTER_VIDEOS_SUCCESS: 
            return {...state, videos: action.videos};
        case types.SELECTED_VIDEO:
            return { ...state, selectedVideo: {...state.selectedVideo, ...action.video }};
        default:
            return state;
    }

}