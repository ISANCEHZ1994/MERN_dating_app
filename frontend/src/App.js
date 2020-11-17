import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import FirstPage from './Components/Welcome Page/FirstPage';
import SignUpPage from './Components/Welcome Page/SignUpPage';
// import HomePage from './Components/Main Page/Home Page/HomePage';
import NavBar from './Components/Main Page/NavBar/NavBar';
import Profile from './Components/Main Page/Users/Profile/Profile';
import Chats from './Components/Main Page/Users/Chats/Chats';
import Connections from './Components/Main Page/Users/Connections';
import Love from './Components/Main Page/Users/Love/Love';

//  Here is the directional where I want to set up where each component will go

function App() {
  return (
   <BrowserRouter>
   <Switch>
      <Route path="/welcome-to-connections" component={FirstPage}/>
      <Route path="/sign-up" component={SignUpPage}/>
      <Route path='/navbar' component={NavBar}/>
      {/* <Route path="/main-page" component={HomePage}/> */}
      <Route path='/profile-page' component={Profile}/>
      <Route path='/chat-page' component={Chats}/>
      <Route path='/connections-page' component={Connections}/>
      <Route path='/love-page' component={Love}/>
   </Switch>
   </BrowserRouter>
  );
}

export default App;
