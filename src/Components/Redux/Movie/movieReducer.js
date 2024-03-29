import {
    GET_MOVIES_BY_ID_FAILED,
    GET_MOVIES_BY_ID_START,
    GET_MOVIES_BY_ID_SUCCESS,
    GET_MOVIES_FAILED,
    GET_MOVIES_START,
    GET_MOVIES_SUCCESS
} from "./movieTypes";

export const movieReducer = (
    initialState = {
        movies: [],
        isLoading: false,
        // movie: [],//?
        movie: [],
        success: false,
        error: "",
    },
    action
) => {
    switch (action.type) {
        /** get movies Cases*/
        case GET_MOVIES_START:
            return {
                ...initialState,
                isLoading: true,
            };
        case GET_MOVIES_SUCCESS:
            return {
                ...initialState,
                isLoading: false,
                movies: [...initialState.movies, ...action.payload],
                success: true,
            };
        case GET_MOVIES_FAILED:
            return {
                ...initialState,
                isLoading: false,
                error: action.payload,

            };

        /** get movie by ID Cases*/

        case GET_MOVIES_BY_ID_START:
            return {
                ...initialState,
                movie: {
                    isLoading: true,
                }
            };
        case GET_MOVIES_BY_ID_SUCCESS:
            return {
                ...initialState,
                movie: {
                    movie: action.payload,
                    isLoading: false,
                },
            };
        case GET_MOVIES_BY_ID_FAILED:
            return {
                ...initialState,
                movie: {
                    isLoading: false,
                    error: action.payload,
                },
            };
        default:
            return initialState;
    }

};