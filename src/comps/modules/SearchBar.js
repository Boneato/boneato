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
    width: '100%',
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
    padding: 10,
    marginRight: 10,
  },
  iconSearch: {
    width: '84px',
    height: '84px',
  }
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














/*

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: '#FFFFFF',
    borderRadius: 12,
    border: 0,
    color: 'white',
    height: 130,
    padding: '0 30px',
    width: '100%',
    marginTop: 'auto',
    marginBotton: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    fontSize: 84,
  }
};

function ClassNames(props) {
  const { classes, children, className, ...other } = props;

  return (
    <TextField type="search" placeholder="BONITO?" className={clsx(classes.root, classes.input, className)} {...other}>
      {children || 'class names'}
    </TextField>
    
    
  );
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);

/*<TextField
					id="outlined-search"
					label="Search field"
					type="search"
					className="search-ingredient"
					margin="normal"
					variant="outlined"
        />*/
        
