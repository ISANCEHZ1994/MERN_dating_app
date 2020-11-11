import React from 'react';
import { useHistory } from "react-router-dom";


// export default class NavBar extends React.Component{

//     state = {

//     }

    

//     goToProfile = () => {
//         const 
//     }

//     render(){
//         return(
//             <div className='Navbar-div'>
//                I want a directional NavBar that will take the user every where they want to go<br></br>
//                How Perhaps this is doesnt need the react router browser? 
//            <button> </button> 
//            <button> </button>

//             </div>
//         )
//     }

// };


function NavBar(){

    const history = useHistory();

        function goToProfile(){

        }

    return(

        <div className='Navbar-div'>
                I want a directional NavBar that will take the user every where they want to go<br></br>
               How Perhaps this is doesnt need the react router browser? 
            <button> </button> 
            <button> </button>

        </div>

    )
};

export default NavBar;