import React from 'react';
import { connect } from 'react-redux';
import { addReview } from '../../Redux/actions';
import ReviewForm from './ReviewForm';

class ManageReviewForm extends React.Component {

    onReviewSubmit(newReview) {
        this.props.addReview(newReview)
    }

    render() {
        return (
            <div>
                <ReviewForm onReviewSubmit={this.onReviewSubmit.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        state,
    }
}

const maspDispatchToProps = {
    addReview
};

export default connect(
    mapStateToProps,
    maspDispatchToProps)(ManageReviewForm);