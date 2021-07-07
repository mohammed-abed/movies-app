import {GET_MOVIES_BY_ID_START, GET_MOVIES_FAILED, GET_MOVIES_START, GET_MOVIES_SUCCESS} from "./movieTypes";
import axios from "axios";

export const getMovies = () => async (dispatch) => {
    dispatch({
        type: GET_MOVIES_START,
    });

    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=dcf2d1463b5703e25fc8d86eb0fce187&page=${page}`
        );
        dispatch({
            type: GET_MOVIES_SUCCESS,
            payload: response.data.results,//.result.data
        });
    } catch (e) {
        dispatch({
            type: GET_MOVIES_FAILED,
            payload: e?.response?.data.message, //??
        });
    }
};

export const getMoviesById = () => async (dispatch) => {
    dispatch({
        type: GET_MOVIES_BY_ID_START,
    });

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=dcf2d1463b5703e25fc8d86eb0fce187&language=en-US`);
        dispatch({
            type: GET_MOVIES_BY_ID_SUCCESS,
            payload: response.data,
        });
    } catch (e) {
        dispatch({
            type: GET_MOVIES_FAILED,
            payload: e?.response?.data.results, //??
        });
    }
};