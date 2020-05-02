import * as actionTypes from './actionTypes'

const initialState = {
    loading: false,
    reviews: [],
    error: false,
    message: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_DATA_REQUESTED:
            return Object.assign({}, state, {
                loading: true,
            });
        case actionTypes.GET_ALL_REVIEWS_SUCCEED:
            return Object.assign({}, state, {
                loading: false,
                error: false,
                reviews: action.payload
            });
        case actionTypes.ADD_REVIEW_SUCCEED:
            return Object.assign({}, state, {
                loading: false,
                error: false,
                reviews: [...state.reviews, action.payload]
            });
        case actionTypes.REMOVE_REVIEW_SUCCEED:
            return Object.assign({}, state, {
                loading: false,
                error: false,
                reviews: state.reviews.filter(review => review.id !== action.payload)
            });
        case actionTypes.FETCH_DATA_FAILED:
            return Object.assign({}, state, {
                loading: false,
                error: true,
                message: action.payload
            });

        default: return state;
    }
}