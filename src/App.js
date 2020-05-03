import React from 'react'
import ManageReviewsList from './Components/ReviewsList/ManageReviewsList';
import ManageReviewForm from './Components/ReviewForm/ManageReviewForm';
import ManageLoading from './Components/Common/ManageLoading';
import ManageAlert from './Components/Common/ManageAlert';
import { Grid, Container } from '@material-ui/core/';

function styles() {
    return {
        marginTop: '20px'
    }
}

class App extends React.Component {
    render() {
        return (
            <div style={styles()}>
                <Container spacing={3}>
                    <Grid item xs={12} sm={6} >
                        <ManageReviewForm />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ManageReviewsList />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ManageLoading />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ManageAlert />
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default App
