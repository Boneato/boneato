import firebase from 'firebase/app';

// takes in ingredient name and sends to database
// table consisting of ingredients to be reviewd by admin
export default function sendIngred(ingredName, ingredDescription) {
    let ingredRef = firebase.database().ref('ingredients');
    ingredRef.push({name: ingredName, descript: ingredDescription})
}