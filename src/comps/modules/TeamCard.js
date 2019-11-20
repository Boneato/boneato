import React, { Component } from 'react';
import Modal from '../modules/Modal';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Lauren from '../../imgs/Lauren.jpg';
// import 


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function TeamCard(props) {
  const {FirstName, LastName, Position}=props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Lauren}
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