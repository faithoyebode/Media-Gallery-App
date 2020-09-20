import * as types from '../constants/actionTypes';

const initialState = {
    images: [],
    selectedImage: {}
}

export default function(state = initialState.images, action){
    switch(action.type){
        case types.FLICKR_IMAGES_SUCCESS: 
            return {...state, images: action.images};
        case types.SELECTED_IMAGE:
            return { ...state, selectedImage: { ...state.selectedImage, ...action.image }};
        default:
            return state;
    }

}