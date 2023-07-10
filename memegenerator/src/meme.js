import React from 'react';
import memes from './memesData.js';

export default function Meme(){
    function getMemeImage(){
        const memeDataArray = memes.data.memes;
        const randomNumber = Math.floor(Math.random() * memeDataArray.length);
        const url = memeDataArray[randomNumber].url;
        console.log(url);
    }


    return(
        <main>
            <div className = "form">
                <input className = "form-input" placeholder = "Top text" type = "text"></input>
                <input className = "form-input" placeholder = "Bottom text" type = "text"></input>
                <button className = "form-button" onClick = {getMemeImage}> Get a meme image </button>
            </div>
        </main>
    )
}
