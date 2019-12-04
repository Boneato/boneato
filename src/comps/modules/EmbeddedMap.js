import React, { Component, useState } from 'react';
import { compose, withProps, renderComponent } from "recompose"
import { Map, GoogleApiWrapper, Marker} from "google-maps-react"

export class EmbeddedMap extends Component{

    constructor(props){
      super(props);
      this.state={
        locationIDlist: props.locationIDlist,
        stores:[{lat:47.49855629475769, lng:-122.14184416996333},
                {latitude:47.359423, longitude:-122.021071},
                {latitude:47.5524695, longitude: -122.0425407}]
      }
    }

    //MapsControllers some function here
    //Takes locationIDlist and returns back with a list of lat and lng

    displayMarkers = () =>{
      return this.state.stores.map((store,index)=>{
        return <Marker key={index} id={index} position={{
          lat: store.latitude,
          lng: store.longitude
        }}
        onClick={()=>console.log("You clicked me!")}/>
      })
    }

    render(){
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