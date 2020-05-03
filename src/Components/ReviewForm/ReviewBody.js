import React from 'react'
import { TextField, InputLabel } from '@material-ui/core';

const styles = {
    textarea: {
        'height': '90px',
        'resize': 'none'
    },
}

const placeholderText = 'Description';

class ReviewBody extends React.Component {
    state = { errorText: '' }

    onInputBodayTextChange(event) {
        let inputText = event.target.value;

        if (inputText === '') {
            this.setState({ errorText: 'Input required!' })
        }
        else {
            this.setState({ errorText: '' });
        }

        this.props.onBodyTextChange(inputText);
    }

    render() {
        return (
            <div>
                <InputLabel>Body</InputLabel >
                <TextField rows={3}
                    multiline
                    placeholder={placeholderText}
                    style={styles.textarea}
                    value={this.props.boday}
                    onChange={this.onInputBodayTextChange.bind(this)}
                    variant="outlined"
                    helperText={this.state.errorText}
                    error={(this.state.errorText === '') ? false : true}
                    required />
            </div>
        )
    }
}

export default ReviewBody