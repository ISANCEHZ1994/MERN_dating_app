import React from 'react';
import NavBar from '../../NavBar/NavBar';


export default class Profile extends React.Component{
    
    state = {
        user: []
    };

    componentDidMount(){
        fetch('http://localhost:3001/users')
        .then( resp => resp.json() )
        .then( data => (
            this.setState({
                user: data
            })
        ))
    };

    render(){
        console.log(this.state.user)
        return(
            <div>
                <NavBar/>
                This is a user's profile where they can view or change their interests and what they are looking for<br></br>
                I want to be as detailed as possible with any user!
                
            </div>
        )
    };

};