import React, {Component} from'react';
import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile.js';
import MyPhoto from './img/imageInSrc.png';



const App = () =>{
  
  

    return (
      <div className="App">
        
        <h1>THE PROFILE</h1>
        
        <Profile FullName="Amel"  Profession="Ma Profession"><img src={MyPhoto}/></Profile> 
              
      </div>
    );

  
  
}

export default App;
