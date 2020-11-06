import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    BrowserRouter
  } from "react-router-dom";

export default class NavBar extends React.Component{

    state = {

    }

    render(){
        return(
            <div>
               I want a directional NavBar that will take the user every where they want to go<br></br>
               How Perhaps this is doesnt need the react router browser? 
            </div>
        )
    }

};


// function NavBar(){
//     return(
//         <BrowserRouter>
            
//         </BrowserRouter>
//     )
// };

// export default NavBar;