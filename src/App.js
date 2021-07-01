import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './FoodBox'
//iteration 0 -- import:
import 'bulma/css/bulma.css';
import foods from './foods.json';

function App() {
  return (
    <div className="App">
      <FoodBox foods={foods}/>
    </div>
  );
}

export default App;
