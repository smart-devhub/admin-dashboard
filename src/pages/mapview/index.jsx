import React from 'react'

import ProgressBar from '../../component/common/ProgressBar'

import PigeonMap from '../../component/Map/MapView'
import Typography from '../../component/common/Typography'
const MapView = () => {
   

    return (
        <>
            <Typography text="Active Users 20" fontSize={20}  />
            <ProgressBar percentage={20} />
            <PigeonMap numberOfMarkers={20}/>
        </>

    )
}

export default MapView