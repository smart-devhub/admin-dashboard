// src/App.js
import React,{Suspense} from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css'
import { routesConfig } from './routes/allroutes';


const App = () => {
  return (
   
      <Routes>
        {routesConfig.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <route.layout>
                  <Suspense>
                  <route.component />
                  </Suspense>
                
              </route.layout>
            }
          />
        ))}
      </Routes>
    

  );
};

export default App;
