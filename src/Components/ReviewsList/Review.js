import React from 'react';
import { ListItem, Divider, IconButton, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import StarRatingComponent from 'react-star-rating-component';

class Review extends React.Component {

    render() {
        return (
            <div>
                <ListItem >
                    <ListItemText
                        primary={this.props.body}
                    />
                    <StarRatingComponent
                        name="star-rating"
                        value={this.props.rating}
                        editing={false}
                    />
                    <ListItemSecondaryAction>
                        <IconButton
                            onClick={() => { this.props.onRemoveReview(this.props.id) }}
                            edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="fullWidth" component="li" />
            </div>
        )
    }

}

export default Review