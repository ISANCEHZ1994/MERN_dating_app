import React from 'react';
import NavBar from '../../NavBar/NavBar';

export default class Chats extends React.Component{

    state = {

    }

    render(){
        return(
            <div>
                <NavBar/>
                This is a user's CHAT SECTION where a user can see their past and favorite chat groups!<br></br>
                A user can always come back to their favorite chats!
            </div>
        )
    }

};