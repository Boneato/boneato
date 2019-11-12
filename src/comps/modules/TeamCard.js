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

        const {PersonInfo}=this.props;

        return (
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={"../imgs/" + PersonInfo.name + ".jpg"}
                  title={PersonInfo.name + " Photo"}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {PersonInfo.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {PersonInfo.position}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
    }
}