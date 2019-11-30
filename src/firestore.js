import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './comps/App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
import {BrowserRouter} from 'react-router-dom';

var config = {
    apiKey: "AIzaSyA18aSKV9qp66x5s0FL6y_xcdjlBeBRVng",
    authDomain: "bonito-collab.firebaseapp.com",
    databaseURL: "https://bonito-collab.firebaseio.com",
    projectId: "bonito-collab",
    storageBucket: "bonito-collab.appspot.com",
    messagingSenderId: "49830494344",
    appId: "1:49830494344:web:f4a868b361ec362f571f3d",
    measurementId: "G-683YLNRKFH"
  };
var test = 'ingredient';
firebase.initializeApp(config);
require('firebase/app');
require('firebase/auth');
require('firebase/database');


const dbTest = firebase.database();
test = dbTest.ref('ingredients/');

export const db = firebase;


