import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as  reviewActions from '../../Redux/actions';
import ReviewsList from './ReviewsList'



class ManageReviewsList extends React.Component {

    componentDidMount() {
        this.props.loadReviews();
    }

    render() {
        return (
            < div >
                <ReviewsList reviews={this.props.reviews} />
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        reviews: state.reviews
    }
}

const maspDispatchToProps = dispatch => {
    return {
        loadReviews: () => dispatch(reviewActions.loadReviews())
    };
}

export default connect(
    mapStateToProps,
    maspDispatchToProps,
)(ManageReviewsList); 