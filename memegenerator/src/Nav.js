import React from 'react';
import trollFace from './images/Troll Face.png';



function Nav(){
    return(
        <div className = "Nav">

            <img className = "trollFace" src = {trollFace} alt = "trollface"/>
            <h1>MemeGenerator</h1>
            <h2 className = "nav-right">React Course - Project 3</h2>

        </div>
    )
}

export default Nav;