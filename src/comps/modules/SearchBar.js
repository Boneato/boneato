import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import {Popper, Popover} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Redirect} from 'react-router-dom';

import { db, ingred } from '../../firestore';
require('firebase/firestore')

const useStyles = makeStyles(theme => ({
	root: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		height: 130
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
		fontSize: '84px',
		fontWeight: 'bold',
		padding: '0px 20px'
	},
	iconButton: {
		margin: '10px 20px 10px 20px'
	},
	iconSearch: {
		width: '84px',
		height: '84px',
		color: '#0C9A89',
	}
}));

export default function SearchBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userInput, setInput] = useState("");
  const [goDirect, setDirect] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    props.grabSearchInput(userInput);
    setDirect(true);
  };

  const handleChange = (event) => {
    
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  var search = (
    <div>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Bonito"
          inputProps={{ 'aria-label': 'search bonito' }}
          onChange={event => setInput(event.target.value)}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleClick}>
          <SearchIcon className={classes.iconSearch} />
        </IconButton>
      </Paper>
    </div>
  );
  if (goDirect) {
    search = <div><Redirect to="/results"></Redirect></div>
  }
  return search;
}

// const suggestions = ingred;
// // db.firestore().collection('ingredients');
// console.log(suggestions);

// function renderInputComponent(inputProps) {
//   const { classes, inputRef = () => {}, ref, ...other } = inputProps;

//   return (
//     <TextField
//       fullWidth
//       InputProps={{
//         inputRef: node => {
//           ref(node);
//           inputRef(node);
//         },
//         classes: {
//           input: classes.input,
//         },
//       }}
//       {...other}
//     />
//   );
// }

// function renderSuggestion(suggestion, { query, isHighlighted }) {
//   const matches = match(suggestion.name, query);
//   const parts = parse(suggestion.name, matches);

//   return (
//     <MenuItem selected={isHighlighted} component="div">
//       <div>
//         {parts.map(part => (
//           <span key={part.text} style={{ fontWeight: part.highlight ? 500 : 400 }}>
//             {part.text}
//           </span>
//         ))}
//       </div>
//     </MenuItem>
//   );
// }

// function getSuggestions(value) {
//   const inputValue = deburr(value.trim()).toLowerCase();
//   const inputLength = inputValue.length;
//   let count = 0;

//   return inputLength === 0
//     ? []
//     : suggestions.filter(suggestion => {
//         const keep =
//           count < 5 && suggestion.name.slice(0, inputLength).toLowerCase() === inputValue;

//         if (keep) {
//           count += 1;
//         }

//         return keep;
//       });
// }

// function getSuggestionValue(suggestion) {
//   return suggestion.name;
// }

// export default function IntegrationAutosuggest() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [state, setState] = React.useState({
//     single: '',
//     popper: '',
//   });

//   const [stateSuggestions, setSuggestions] = React.useState([]);

//   const handleSuggestionsFetchRequested = ({ value }) => {
//     setSuggestions(getSuggestions(value));
//   };

//   const handleSuggestionsClearRequested = () => {
//     setSuggestions([]);
//   };

//   const handleChange = name => (event, { newValue }) => {
//     setState({
//       ...state,
//       [name]: newValue,
//     });
//   };

//   const autosuggestProps = {
//     renderInputComponent,
//     suggestions: stateSuggestions,
//     onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
//     onSuggestionsClearRequested: handleSuggestionsClearRequested,
//     getSuggestionValue,
//     renderSuggestion,
//   };

//   return (
//     <div className={classes.root}>
//       <Autosuggest
//         {...autosuggestProps}
//         inputProps={{
//           classes,
//           id: 'react-autosuggest-simple',
//           placeholder: 'Bonito',
//           value: state.single,
//           onChange: handleChange('single'),
//         }}
//         // theme={{
//         //   container: classes.container,
//         //   suggestionsContainerOpen: classes.suggestionsContainerOpen,
//         //   suggestionsList: classes.suggestionsList,
//         //   suggestion: classes.suggestion,
//         // }}
//         renderSuggestionsContainer={options => (
//           <Paper {...options.containerProps} square>
//             {options.children}
//           </Paper>
//         )}
//       />
//     </div>
//   );
// }
