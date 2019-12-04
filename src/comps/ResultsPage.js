import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
const NutrixURL =  "https://trackapi.nutritionix.com/v2/search/instant";
					 
function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

export default function ResultsPage(props) {
	// // takes in list of links with attached ingredient IDs
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	const [ingredList, setList] = useState([]);
	const [fetchingData, setFetch] = useState(false);

	useEffect(() => {
    	const getNutrix = async (food) => {
			try {
				setList([]);
				setFetch(true);
				const response = await axios.get(NutrixURL, { 
						headers: {'x-app-id': '3e44cfbe', 'x-app-key': 'be52ed410ebd23630810aa7ca9807c74'},
						params: {'query': food, 'self': false, 'common_general': false, 'common_restaurant': false}
					});
				setList(response.data);
				setFetch(false);
			} catch (e) {
				console.log(e);
				setList([]);
				setFetch(false);
			}
		};
		getNutrix(props.userInput);
	}, []);
	// getNutrix = (food) => {
	// 	this.setState({...this.state, fetchingData: true});
	// 	axios.get(",
	// 		
	// 	).then((response) => {
	// 		this.setState({
	// 			ingredList: response.data,
	// 			fetchingData: false
	// 		});
	// 	}).catch(e => {
	// 		console.log(e);
	// 		this.setState({...this.state, fetchingData: false});
	// 	})
	// }

	// componentDidMount() {
	// 	this.getNutrix(this.props.userInput);
	// }

	// componentDidUpdate() {
	// }
    // autofilled = autoList.map(function(item, i) {
    //   return ( 
    //     <Typography className={classes.typography}>
    //       {item}
    //     </Typography>
    //   )
    // })
	// pre-conditions:
	//      must be accessed directly from the HomePage
	// post-conditions:
	//      renders relevant search results provided by SearchBarView (AgoliaController)
	//      Each relevant result will be linked to their respective SpecingPage.
	//render() {
	let displayList = "";
	console.log(ingredList);
	if (fetchingData && ingredList.length > 0) {
		console.log(ingredList)
		// displayList = ingredList.map(function(item, i) {
		// 	return ( 
		// 		<ListItem button>
		// 			<ListItemText primary={item["food_name"]} />
		// 		</ListItem>
		// 	)
		// })
	} else {
		displayList = (
		<ListItem button>
			<ListItemText primary="loading" />
		</ListItem>
		)
	}
	return (
		<div className="content-container">
			<Grid container direction="row" justify="center" spacing={3}>
				<Grid item xs={12}>
					<div className="page-title">
						"{' '}
						<span className="search-query">
							{props.userInput}
						</span>{' '}
						"
					</div>
					<div className="large-italic">
						Found {4} results for "{props.userInput}":
					</div>
					<List component="nav" aria-label="search results">
						{displayList}
					</List>
				</Grid>
			</Grid>
		</div>
	);
}

