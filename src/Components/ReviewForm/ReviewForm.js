import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import ReviewStarRating from './ReviewStarRating'
import ReviewBody from './ReviewBody'
import { Form } from 'react-bootstrap'

const styles = {
    wrapper: {
        paddingBottom: '20px',
        borderBottom: '1px solid grey'
    }
}

class ReviewForm extends React.Component {

    state = { body: '', rating: 0 };

    isValid() {

    }

    onBodyTextChange(event) {
        this.setState({ body: event.target.value });
    }

    onChangeRating(nextValue, prevValue) {
        this.setState({ rating: nextValue });
    }

    onSumbitReview(event) {
        console.log(this.state.body);
        console.log(this.state.rating);
        this.props.onReviewSubmit(this.state);
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <Form>
                    <Row>
                        <Col md={12}>
                            <ReviewBody boday={this.state.boday} onBodyTextChange={this.onBodyTextChange.bind(this)} />
                            <ReviewStarRating onChangeRating={this.onChangeRating.bind(this)} />
                            <Button bsstyle="primary" bssize="small" onClick={this.onSumbitReview.bind(this)}>Save review</Button>
                        </Col>
                    </Row>
                </Form>

            </div>
        )
    }
}

export default ReviewForm