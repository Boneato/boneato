import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 130,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: '84px',
    fontWeight: 'bold',
    padding: '0px 20px',
  },
  iconButton: {
    padding: '10px 20px 10px 10px',
  },
  iconSearch: {
    width: '84px',
    height: '84px',
    color: '#0C9A89'
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Bonito"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon className={classes.iconSearch} />
      </IconButton>
    </Paper>
  );
}

