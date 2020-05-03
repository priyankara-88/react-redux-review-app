import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { InputLabel } from '@material-ui/core';

/*
    react-star-rating-component
    https://github.com/voronianski/react-star-rating-component
*/

class ReviewStarRating extends React.Component {

    onStarClick(nextValue, prevValue) {
        this.props.onChangeRating(nextValue)
    }

    render() {
        return (
            <div>
                <InputLabel> Rating </InputLabel >
                <StarRatingComponent
                    name="star-rating"
                    onStarClick={this.onStarClick.bind(this)}
                />
            </div>
        )
    }
}

export default ReviewStarRating