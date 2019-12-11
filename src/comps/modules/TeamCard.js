import React, { Component } from 'react';
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    width: '100%',
    boxShadow: 'none',
    textAlign: 'center',
    borderRadius: '0px',
  },
  media: {
    height: 250,
  },
  content: {

    padding: '8px 16px 16px 16px',
  },
  name: {
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
    fontSize: '20px',
  },
  role: {
    fontWeight: 400,
    fontFamily: 'Open Sans',
    fontSize: '16px',
    color: '#888888',
  }
});

export default function TeamCard(props) {
  const {FirstName, LastName, Position, picture}=props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={picture}
        title={FirstName + " Photo"}
      />
      <CardContent className={classes.content}>
        <Typography className={classes.name}>
          {FirstName + " " + LastName}
        </Typography>
        <Typography className={classes.role}>
          {Position}
        </Typography>
      </CardContent>
    </Card>
  );
}