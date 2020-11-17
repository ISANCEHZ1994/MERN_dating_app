import React from 'react';
import NavBar from '../../NavBar/NavBar';


export default class Profile extends React.Component{

    state = {

    }

    render(){
        return(
            <div>
                <NavBar/>
                This is a user's profile where they can view or change their interests and what they are looking for<br></br>
                I want to be as detailed as possible with any user!
            </div>
        )
    }

};