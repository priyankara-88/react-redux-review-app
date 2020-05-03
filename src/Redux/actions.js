import axios from 'axios';
import * as actionTypes from './actionTypes';

const BASE_URL = 'http://localhost:3001/';
const REVIEWS_URL = `${BASE_URL}reviews`;

export const dataRequested = () => (
    {
        type: actionTypes.FETCH_DATA_REQUESTED,
    });

export const reviewsLoaded = (reviews) => (
    {
        type: actionTypes.GET_ALL_REVIEWS_SUCCEED,
        payload: reviews
    });

export const reviewsAdded = (review) => (
    {
        type: actionTypes.ADD_REVIEW_SUCCEED,
        payload: review
    });

export const reviewsRemoved = (idReview) => (
    {
        type: actionTypes.REMOVE_REVIEW_SUCCEED,
        payload: idReview
    });

export const fetchingDataFailed = (error) => (
    {
        type: actionTypes.FETCH_DATA_FAILED,
        payload: error
    });

export const loadReviews = () => {
    return function (dispatch) {
        dispatch(dataRequested())
        setTimeout(() => {
            axios.get(REVIEWS_URL)
                .then(response => {
                    const reviews = response.data
                    dispatch(reviewsLoaded(reviews))
                })
                .catch(error => {
                    dispatch(fetchingDataFailed(error.message))
                })
        }, 3000)
    }
};

export const addReview = (review) => (dispatch) => {
    dispatch(dataRequested())
    setTimeout(() => {
        axios.post(REVIEWS_URL, review)
            .then(response => {
                const review = response.data
                dispatch(reviewsAdded(review))
            })
            .catch(error => {
                dispatch(fetchingDataFailed(error.message))
            })
    }, 3000)
};

export const removeReview = (id) => (dispatch) => {
    dispatch(dataRequested())
    setTimeout(() => {
        axios.delete(`${REVIEWS_URL}/${id}`)
            .then(
                dispatch(reviewsRemoved(id))
            )
            .catch(error => {
                dispatch(fetchingDataFailed(error.message))
            })
    }, 3000)
};