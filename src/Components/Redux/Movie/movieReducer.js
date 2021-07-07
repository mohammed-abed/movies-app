import {
    GET_MOVIES_BY_ID_FAILED, GET_MOVIES_BY_ID_START,
    GET_MOVIES_BY_ID_SUCCESS,
    GET_MOVIES_FAILED,
    GET_MOVIES_START,
    GET_MOVIES_SUCCESS
} from "./movieTypes";

export const movieReducer=(
    initialState = {
                             movies: [],
                               isLoading: false,
                               movie: [],
                           },
                           action
) => {
    switch (action.type) {
        /** Cases*/
        case GET_MOVIES_START:
            return {
                ...initialState,
                isLoading: true,
            };
        case GET_MOVIES_SUCCESS:
            return {
                ...initialState,
                isLoading: false,
                sliderImages: action.payload,
            };
        case GET_MOVIES_FAILED:
            return {
                ...initialState,
                isLoading: false,
                error: action.payload,
            };


        case GET_MOVIES_BY_ID_START:
            return {
                ...initialState,
                isLoading: true,
            };
        case GET_MOVIES_BY_ID_SUCCESS:
            return {
                ...initialState,
                isLoading: false,
                sliderImages: action.payload,
            };
        case GET_MOVIES_BY_ID_FAILED:
            return {
                ...initialState,
                isLoading: false,
                error: action.payload,
            };
        default:
            return initialState;
    }

};