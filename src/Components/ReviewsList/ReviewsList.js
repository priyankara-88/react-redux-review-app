import React from 'react'
import { List, Typography } from '@material-ui/core';
import MangeReview from './MangeReview';

const styles = {
    wrapper: {
        marginTop: '30px'
    }
}

class ReviewsList extends React.Component {

    render() {
        return (
            <List style={styles.wrapper}>
                <Typography variant="h6" align='center'>
                    Reviews List
                </Typography>
                {this.props.reviews.map(review => <MangeReview key={review.id} {...review} />)}
            </List>
        )
    }
}

export default ReviewsList