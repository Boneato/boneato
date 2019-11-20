import React, {Component} from 'react';
import UpVoteButton from '../location/UpVoteButton';
import DownVoteButton from '../location/DownVoteButton';

export default function LocationInfo(props) {
    let locationInfo = props.locationInfo;
    // let locationInfo = {
    //     ingredientID: null,
    //     locationID:null,
    //     upVote: 0,
    //     downVote: 0,
    //     userID: null,
    //     dateFirstReport:null,
    // };
    let detailedLoca = getDetailedLocation(locationInfo.locationID)
    let index = props.index;
    let errorWarning = null;

    if(locationInfo.upVote>= 5){
        errorWarning = <p>The 5 most recent voters reported that they didn't find this ingredient here.</p>
    }


    return(
        <div>
            {errorWarning}
            <span>
                <UpVoteButton locationInfo={locationInfo}/>
                <DownVoteButton locationInfo={locationInfo}/>
            </span>
            <span>
                <p><a>{index}</a>detailedLoca.locationName</p>
                <p>detailedLoca.locationAddress</p>
                <p>Reported By {detailedLoca.UserName} on {locationInfo.dateFirstReport}.</p>
            </span>
        </div>
        )
    
}

function getDetailedLocation(locationID) {
    let detailedLoca = {
        locationID: null,
        locationName: null,
        locationAddress: null,
        UserName: null,
    };
    //function to fetch other location infomation in location model
    return detailedLoca
}