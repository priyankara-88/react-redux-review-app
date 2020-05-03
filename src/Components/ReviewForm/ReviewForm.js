import React from 'react'
import ReviewStarRating from './ReviewStarRating'
import ReviewBody from './ReviewBody'
import { Button, Typography } from '@material-ui/core';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = {
    wrapper: {
        marginTop: '30px'
    }
}

class ReviewForm extends React.Component {

    state = { body: '', rating: 0 };

    onBodyTextChange(text) {
        this.setState({ body: text });
    }

    onChangeRating(nextValue) {
        this.setState({ rating: nextValue });
    }

    onSumbitReview(event) {
        this.props.onReviewSubmit(this.state);
    }

    render() {

        return (
            <div>
                <AppBar position="relative">
                    <Toolbar variant="dense">
                        <Typography variant="h6">
                            Reviews Manage API
                    </Typography>
                    </Toolbar>
                </AppBar>
                <form style={styles.wrapper}>
                    <ReviewBody boday={this.state.boday} onBodyTextChange={this.onBodyTextChange.bind(this)} />
                    <ReviewStarRating onChangeRating={this.onChangeRating.bind(this)} />
                    <Button disabled={(this.state.body) ? false : true}
                        variant="contained"
                        color="primary"
                        onClick={this.onSumbitReview.bind(this)}
                    >Save review</Button>
                </form>
            </div>
        )
    }
}

export default ReviewForm