import React, { Component } from 'react';
import Map from "./Map";
import './App.css';

function App() {
  return (
    <div className='tc'>
		 <h1 className='f1'>International Space Station Current Location</h1>
		 
		 <div className='f1' id="MAP">
		 <Map />
		 <div id="container">
    	<img src="https://raw.githubusercontent.com/hrvoje-rama/iss-tracker/ff1576b1e5f0e3d43809813e55254a436cf22cbb/src/rocket.svg"/> /*test*/
		</div>
		 </div>
		</div>
  );
}

export default App;
