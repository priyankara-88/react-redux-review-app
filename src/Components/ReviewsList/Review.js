import React from 'react';
import { ListGroupItem, } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

class Review extends React.Component {

    render() {
        return (
            <ListGroupItem>
                <p>{this.props.body}</p>
                <StarRatingComponent
                    name="star-rating"
                    value={this.props.rating}
                    editing={false}
                />
                <button onClick={() => { this.props.onRemoveReview(this.props.id) }}>Click</button>
            </ListGroupItem>
        )
    }

}

export default Review