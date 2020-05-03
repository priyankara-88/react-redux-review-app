import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LoadingDisplay } from './LoadingDisplay'

class ManageLoading extends React.Component {

    render() {
        return (
            this.props.isLoading && (<LoadingDisplay />)
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.loading
    }
}

export default connect(
    mapStateToProps)(ManageLoading);