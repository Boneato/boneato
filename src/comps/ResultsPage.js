import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import {db} from '../firestore';
import {Redirect} from 'react-router-dom';
const NutrixURL = 'https://trackapi.nutritionix.com/v2/search/instant';

// ingredientName must not exist in db, ingredientName is all lowercase
function storeIngred (ingredientName) {
	var ingredID = "";
	//console.log(ingredientName)
	ingredID = db.firestore().collection('ingredients').doc().id;
	db.firestore().collection("ingredients").doc(ingredID).set(
		{
			name: ingredientName
		}
	)
	.then((docRef) => {
		db.firestore().collection('ingredNames').doc(ingredientName)
		.set({ingredID : ingredID}).then((docRef) => {
			//console.log("Document written with ID to ingredNames: " + ingredientName)
		}).catch(function(error) {
			//console.error("Error adding document: ", error);
		});
		//console.log("Document written with ID: ", ingredID);
	})
	.catch(function(error) {
		//console.error("Error adding document: ", error);
	});
	return ingredID;
}

// ingredientName must exist inside of db
// function getIngred (ingredientName) {
// 	console.log("getIngred called")
// 	db.firestore().collection("ingredNames").doc(ingredientName).get()
// 	.then((doc) => {
// 		console.log("getIngred called")
// 		console.log(doc.id, " => ", doc.data());
// 		return doc.id;
// 	});
// }

export default function ResultsPage(props) {
	const [ingredList, setList] = useState([]);
	const [fetchingData, setFetch] = useState(false);
	const [goDirect, setDirect] = useState(false);
	const [ingredID, setID] = useState("");
	const [stateName, setName] = useState("");
	let displayList = "";
	
	const checkIngredDB = (ingredientName) => {
		// console.log(ingredientName)
		// ingredientName = ingredientName.toLowerCase();
		return db.firestore().collection("ingredNames").doc(ingredientName).get()
	}

	const handleClick = (event) => {
		setName(event.currentTarget.id.toLowerCase());
		setFetch(true);
		setDirect(true);
	}

	useEffect(() => {
		const getNutrix = async food => {
			//console.log("getNutrix called")
			var tempList = [];
			food = food.toLowerCase();
			try {
				setList([]);
				setFetch(true);
				const response = await axios.get(NutrixURL, {
					headers: {
						'x-app-id': '3e44cfbe',
						'x-app-key': 'be52ed410ebd23630810aa7ca9807c74'
					},
					params: {
						query: food,
						self: false,
						common_general: false,
						common_restaurant: false
					}
				});
				// Checks if the current item exists, by itself, within the query	
				let singleItemExists = false;
				response.data['branded'].forEach((item) => {
					//console.log("inside for each loop")
					//console.log(food.toLowerCase());
					let itemName = item['food_name'].toLowerCase();
					if (itemName === food) {
						singleItemExists = true;
					}
					if (itemName.includes(food) && !itemName.includes("/")) {
						//console.log("food name contains query")
						tempList.push(item["food_name"])
						//console.log(tempList);
					}
				})
				response.data['common'].forEach((item) => {
					//console.log("inside for each loop")
					//console.log(food.toLowerCase());
					let itemName = item['food_name'].toLowerCase();
					if (itemName === food) {
						singleItemExists = true;
					}
					if (itemName.includes(food) && !itemName.includes("/")) {
						//console.log("food name contains query")
						tempList.push(item["food_name"])
						//console.log(tempList);
					}
				})
				if (!singleItemExists) {
					tempList.push(food);
				}
				setList(tempList);
				//console.log("templist is:")
				//console.log(tempList);
				setFetch(false);
			} catch (e) {
				//console.log(e);
				setList([]);
				setFetch(false);
			}
		};
		getNutrix(props.location.state.ingredientName);
	}, []);

	useEffect(() => {
		if (stateName) {
			checkIngredDB(stateName).then((doc) => {
				let ingredID = "";
				if (doc.exists) {
					//console.log("ingredientName exists in DB: " + doc.data().ingredID)
					ingredID = doc.data().ingredID;
					
				} else {
					//console.log("ingredient doesnt exist in db")
					ingredID = storeIngred(stateName);
				}
				setID(ingredID);
				setFetch(false);

			})
			.catch(function(error) {
				//console.log("Error getting documents: ", error);
			})
		}
	}, [goDirect]);

	if (ingredList.length > 0) {
		displayList = ingredList.map(function(item, i) {
			return (
				<ListItem button id={item} onClick={handleClick}>
					<ListItemText primary={item} />
				</ListItem>
			);
		});
	} else {
		displayList = (
			<ListItem button>
				<ListItemText primary="loading" />
			</ListItem>
		);
	}

	let display = (
		<div className="content-container">
			<Grid container direction="row" justify="center" spacing={3}>
				<Grid item xs={12}>
					<div className="page-title">
						"{' '}
						<span className="search-query">{props.location.state.ingredientName}</span>{' '}
						"
					</div>
					<div className="large-italic">
						Found {ingredList.length} results for "{props.location.state.ingredientName}
						":
					</div>
					<List component="nav" aria-label="search results">
						{displayList}
					</List>
				</Grid>
			</Grid>
		</div>
	);

	if (goDirect & !fetchingData) {
		display = (
			<Redirect 
				to={{
					pathname: "/SpecIngPage/" + ingredID,
					state: { 
						ingredientName : stateName,
						ingredientID: ingredID
			}}} ></Redirect>
			
		);
	}
	return (
		<div>
			{display}
		</div>
	);
}

// takes in ingredientID and ingredientname and creates ListItem with Link to
// respective SpecIngPage
function ListItemLink(props) {
	let link = '/SpecingPage/' + props.ingredientID;
	console.log("List item for : " + props.ingredientName + " created");
	const to = {
		pathname: link,
		state: {
			ingredientName: props.ingredientName
		}
	};
	const renderLink = React.useMemo(
		() =>
			React.forwardRef((linkProps, ref) => (
				<Link to={to} {...linkProps} ref={ref} />
			)),
		[to]
	);
	return (
		<li>
			<ListItem button component={renderLink}>
				<ListItemText primary={props.name} />
			</ListItem>
		</li>
	);
}