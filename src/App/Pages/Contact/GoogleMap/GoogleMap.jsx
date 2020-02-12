import React from 'react';
import './GoogleMap.scss';

import GoogleMapReact from 'google-map-react';
const googleApiKey = 'AIzaSyBJptE3Te02Kozh8bqpBwaeA7hc3onQmBY';
const googleCords = {
    lat: 34.0588638,
    lng: -118.4469449,
}

const GoogleMap = () => {
    return (
    <div className={ 'GoogleMap' } >
       

        <GoogleMapReact 
        bootstrapURLKeys={ { key: googleApiKey } }
        defaultCenter={ googleCords}
        defaultZoom={ 14 }
        initialCenter
        >
        </GoogleMapReact>
           

          
    </div>
    );
}

export default GoogleMap;