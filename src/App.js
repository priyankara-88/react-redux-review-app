import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ManageReviewsList from './Components/ReviewsList/ManageReviewsList'
import ManageReviewForm from './Components/ReviewForm/ManageReviewForm'

function styles() {
    return {
        marginTop: '20px'
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="container" style={styles()}>
                <Row>
                    <Col md={4} mdoffset={4}>
                        <ManageReviewForm />
                        <ManageReviewsList />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default App
