import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import FirstPage from './Components/Welcome Page/FirstPage';
import SignUpPage from './Components/Welcome Page/SignUpPage';
import HomePage from './Components/Main Page/Home Page/HomePage';
import NavBar from './Components/Main Page/NavBar/NavBar';

//  Here is the directional where I want to set up where each component will go

function App() {
  return (
   <BrowserRouter>
   <Switch>
      <Route path="/welcome-to-connections" component={FirstPage}/>
      <Route path="/sign-up" component={SignUpPage}/>
      <Route path='/navbar' component={NavBar}/>
      <Route path="/main-page" component={HomePage}/>
   </Switch>
   </BrowserRouter>
  );
}

export default App;
