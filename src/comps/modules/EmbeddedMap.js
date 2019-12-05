import React, { Component, useState } from 'react';
import { compose, withProps, renderComponent } from "recompose"
import { Map, InfoWindow, GoogleApiWrapper, Marker, google, map} from "google-maps-react"
import { db } from '../../firestore';

export class EmbeddedMap extends Component{

    constructor(props){
      super(props);
      //will eventually be props.ingredientID,
      this.state={
        ingredientID: props.ingredientID,
        res: []
      }
    }

    // It is also tested that if the search result is empty, the map will still shows up but without the markers
    // Takes locationIDlist and returns back with a list of lat and lng
    updateLocationDetails = () => {
      var locationQuery = db.firestore().collection("ingredients").doc(this.state.ingredientID)
          .collection("locations").get();

      locationQuery.then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
              let newData = doc.data();
              let newLat = newData.lat;
              let newName = newData.name;
              let newLong = newData.long;         
              let tempList = this.state.res;
              let newObj = {
                "latitude": newLat,
                "longitude": newLong,
                "name": newName
              }
              tempList.push(newObj)
              this.setState({
                  res: tempList
              })
          }.bind(this))
      }.bind(this))
  }

  componentDidMount() {
    this.updateLocationDetails()
  }

    displayMarkers = () =>{
      return this.state.res.map((store,index)=>{
        console.log(store.name);
        return <Marker key={index} id={index} 
        position={{
          lat: store.latitude,
          lng: store.longitude
        }}
        label= {{ color: 'black', fontWeight: 'bold', fontSize: '14px', text:store.name }}/>
      })
    }




    render(){
      //console.log(this.state.res)
      return(
        <Map
          google={this.props.google}
          zoom={8}
          className="map"
          initialCenter={{lat:47.444, lng:-122.176}}
        >
        {this.displayMarkers()}
        </Map>
      )
    }
}

export default GoogleApiWrapper({
  apiKey:'AIzaSyA0nwL7k4fGjV-btDTLTse8funRLitd_UM'
})(EmbeddedMap);