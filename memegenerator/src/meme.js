import React from 'react';
import memes from './memesData.js';

export default function Meme(){
    const [memeImg, setMemeImg] = React.useState("")
    function getMemeImage(){
        const memeDataArray = memes.data.memes
        const randomNumber = Math.floor(Math.random() * memeDataArray.length)
        setMemeImg(memeDataArray[randomNumber].url)
    }


    return(
        <main>
            <div className = "form">
                <input className = "form-input" placeholder = "Top text" type = "text"></input>
                <input className = "form-input" placeholder = "Bottom text" type = "text"></input>
                <button className = "form-button" onClick = {getMemeImage}> Get a meme image </button>
                <img src = {memeImg} className='form-image' alt ="memeImage"/>
            </div>
        </main>
    )
}
