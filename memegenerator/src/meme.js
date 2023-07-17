import React from 'react';
import memes from './memesData.js';

export default function Meme(){
    const [memeImg, setMemeImg] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    function handleChange() {
        const {name, value} = event.target

        setMemeImg(prevMemeImg => {
            return {
                ...prevMemeImg,
                [name]: value
            }
        })
        
    }

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
                <input 
                   className = "form-input" 
                   placeholder = "Top text" 
                   type = "text" 
                   name = "topText"
                   value = {memeImg.topText}
                   onChange = {handleChange}
                />

                
                <input 
                   className = "form-input" 
                   placeholder = "Bottom text" 
                   type = "text"
                   name = "bottomText"
                   value = {memeImg.bottomText}
                   onChange = {handleChange}
                />

                <button 
                   className = "form-button" 
                   onClick = {getMemeImage}> Get a meme image </button>
                <div className = "meme">
                   <img src = {memeImg.randomImage} className='form-image' alt ="memeImage"/>
                   <h2 className = "meme--text top">{memeImg.topText}</h2>
                   <h2 className = "meme--text bottom">{memeImg.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}
