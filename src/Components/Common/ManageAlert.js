import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as  reviewActions from '../../Redux/actions';
import AlertDisplay from './AlertDisplay';

class ManageAlert extends React.Component {

    render() {
        return (
            (this.props.state.message) &&
            (
                <div>
                    <AlertDisplay message={this.props.state.message} error={this.props.state.error} />
                </div>
            )
        );
    }
}

const mapStateToProps = state => {
    return {
        state,
    }
}

const maspDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(reviewActions, dispatch)
    };
}
export default connect(
    mapStateToProps,
    maspDispatchToProps)(ManageAlert);