import React from 'react'
import { Form } from 'react-bootstrap'

const styles = {
    textarea: {
        'height': '100px',
        'resize': 'none'
    },
}

const placeholderText = 'Description';

class ReviewBody extends React.Component {

    render() {
        return (
            <Form.Group controlId="formControlsTextarea">
                <Form.Label>Body</Form.Label>
                <Form.Control as="textarea" rows="3"
                    placeholder={placeholderText}
                    style={styles.textarea}
                    value={this.props.boday}
                    onChange={this.props.onBodyTextChange}
                    required />
                <Form.Control.Feedback type="invalid">
                    Please enter a value
                </Form.Control.Feedback>
            </Form.Group>
        )
    }
}

export default ReviewBody