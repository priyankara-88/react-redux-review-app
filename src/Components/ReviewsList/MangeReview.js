import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { removeReview } from '../../Redux/actions';
import Review from './Review';

class MangeReview extends React.Component {

    render() {
        return (
            <div>
                <Review
                    onRemoveReview={this.props.removeReview}
                    body={this.props.body}
                    id={this.props.id}
                    rating={this.props.rating} />
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
    removeReview
};

export default connect(
    mapStateToProps,
    maspDispatchToProps)(MangeReview);