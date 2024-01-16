// Loader.js

import React from 'react';
import {Circles} from 'react-loader-spinner';


const CustomLoader = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Circles
                height="60"
                width="60"
                color="#00CDAC"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default CustomLoader;
