import React from 'react'
import { Map, Marker } from "pigeon-maps"


const getRandomLocationInPakistan = () => {
    const pakistanBounds = {
        minLatitude: 23.6345,
        maxLatitude: 37.0841,
        minLongitude: 60.872,
        maxLongitude: 77.8375,
    };

    const randomLatitude = Math.random() * (pakistanBounds.maxLatitude - pakistanBounds.minLatitude) + pakistanBounds.minLatitude;
    const randomLongitude = Math.random() * (pakistanBounds.maxLongitude - pakistanBounds.minLongitude) + pakistanBounds.minLongitude;

    return [randomLatitude, randomLongitude];
};
const PigeonMap = ({numberOfMarkers }) => {
    const markers = Array.from({ length: numberOfMarkers }, (_, index) => ({
        id: index,
        location: getRandomLocationInPakistan(),
    }));
    

    return (
        <>
           
            <Map height={600} defaultCenter={markers[0].location} defaultZoom={8} >
                {markers.map((marker) => (
                    <Marker key={marker.id} anchor={marker.location} payload={marker.id}  color="#fd0000" width={30} />
                ))}
            </Map>
        </>

    )
}

export default PigeonMap