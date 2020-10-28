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
    	<img src="https://hrvojeramljak.from.hr/Asset%2040.svg"/>
		</div>
		 </div>
		</div>
  );
}

export default App;