import React from 'react'
import { ListGroup } from 'react-bootstrap';
import MangeReview from './MangeReview';

const styles = {
    wrapper: {
        marginTop: '20px'
    }
}

class ReviewsList extends React.Component {

    render() {
        return (
            <div style={styles.wrapper}>
                <ListGroup>
                    <h5>List of reviews...</h5>
                    {this.props.reviews.map(review => <MangeReview key={review.id} {...review} />)}
                </ListGroup>
            </div>
        )
    }

}

export default ReviewsList