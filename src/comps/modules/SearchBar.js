import React from 'react';
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

import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

import { db, ingred } from '../../firestore';
import axios from 'axios';
require('firebase/firestore')

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

async function getNutrix(food) {
  const response =
    await axios.get("https://trackapi.nutritionix.com/v2/search/instant",
      { headers: {'x-app-id': '3516d379', 'x-app-key': 'a1d35546e9db0d3f594443e8b5dcce9d'},
        params: {'query': food, 'self': false, 'common_general': false, 'common_restaurant': false}}
    )
  console.log(response.data)
};

export default function CustomizedInputBase() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  React.useEffect({

  });
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const autoList = ["test1", "test2", "test3"];
  return (
    <div>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Bonito"
          inputProps={{ 'aria-label': 'search bonito' }}
          onChange={handleClick}
        />
        {/* <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleClick}> */}
          <SearchIcon className={classes.iconSearch} />
        {/* </IconButton> */}
      </Paper>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
      {
        autoList.map(function(item, i) {
          return ( 
            <Typography className={classes.typography}>
              {item}
            </Typography>
          )
        })
      }
      </Popover>
    </div>
  );
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