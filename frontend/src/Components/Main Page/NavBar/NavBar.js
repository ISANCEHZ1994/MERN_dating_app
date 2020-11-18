import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function NavBar(){

    

    const history = useHistory();

        function goToProfile(){
            history.push('/profile-page')
        }

        function goToChats(){
            history.push('/chat-page')
        }

        function goToConnections(){
            history.push('/connections-page')
        }

        function goToLove(){
            history.push('/love-page')
        }

        function signOut(){
            history.push('/welcome-to-connections')
        }


    return(

        <div className='Navbar-div'>

           <button type="button" onClick={goToLove}>LOVE</button> 
            <button type="button" onClick={goToChats}> CHATS</button>
            <button type="button" onClick={goToConnections}> CONNECTIONS </button>
            <button type="button" onClick={goToProfile}> PROFILE </button> 
            <button type="button" onClick={signOut}> SIGN OUT </button> 

        </div>

    )
};

export default NavBar;