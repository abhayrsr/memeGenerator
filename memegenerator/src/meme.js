import React from 'react';
import memes from './memesData.js';

export default function Meme(){
    const [memeImg, setMemeImg] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const[allMemesImages, setAllMemesImages] = React.useState(memes)
    function getText(){
        
    }

    function getMemeImage(){
        const memeArray = allMemesImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setMemeImg((prevMemeImg) => ({
           ...prevMemeImg, randomImage: url
        }))
    }


    return(
        <main>
            <div className = "form">
                <input className = "form-input" placeholder = "Top text" type = "text"></input>
                <input className = "form-input" placeholder = "Bottom text" type = "text"></input>
                <button className = "form-button" onClick = {getMemeImage}> Get a meme image </button>
                <img src = {memeImg.randomImage} className='form-image' alt ="memeImage"/>
            </div>
        </main>
    )
}
