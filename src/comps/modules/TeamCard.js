import React, { Component } from 'react';
import Modal from '../modules/Modal';
import Card from '@material-ui/core/Card';
import {CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default class TeamCard extends Component {
    
    // takes in team member image, first name, and member's role in a list
    constructor(props) {

    }

    componentDidMount() {

    }

    // renders a team member image, team member first name, and team member role
    render() {
      const {FirstName, LastName, Position}=this.props;
      const classes = useStyles();
        return (
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={"../imgs/" + FirstName + ".jpg"}
                  title={FirstName + " Photo"}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {FirstName + " " + LastName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {Position}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
    }
}