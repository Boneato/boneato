import React, { Component } from 'react';
import Modal from '../modules/Modal';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export class TeamCard extends Component {
    
    // takes in team member image, first name, and member's role in a list
    constructor(props) {

    }

    componentDidMount() {

    }

    // renders a team member image, team member first name, and team member role
    render() {

        return (
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/image_location.jpg"
                  title="Person Photo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Name Placeholder
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Position placeholder
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
    }
}