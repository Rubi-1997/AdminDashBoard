import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import MainDash from './Components/MainDash/MainDash';
import RightSide from './Components/RightSide/RightSide';



// import React from 'react';
// import Practise from './Components/Practise/Practise';

function App() {
  return (
    <div className="App">
      <div className="Appglass">
        <Sidebar/>
        <MainDash />
        <RightSide/>
      </div>
    </div>
  );
}

export default App;




