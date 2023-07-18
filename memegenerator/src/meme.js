import React from 'react';

export default function Meme(){
    const [memeImg, setMemeImg] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    })

    function handleChange(event) {
        const {name, value} = event.target

        setMemeImg(prevMemeImg => {
            return {
                ...prevMemeImg,
                [name]: value
            }
        })
        
    }

    var url = ""

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        url = allMemes[randomNumber].url
        setMemeImg((prevMemeImg) => ({
           ...prevMemeImg, randomImage: url
        })
    
    )}

    const[imageUrl] = React.useState(url)

    const handleDownloadClick = () => {
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = '30b1gx.jpg'
            link.click();
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
                   onClick = {getMemeImage}> Get a meme image 
                </button>
                <div className = "meme">
                   <img src = {memeImg.randomImage} className='form-image' alt ="memeImage"/>
                   <h2 className = "meme--text top">{memeImg.topText}</h2>
                   <h2 className = "meme--text bottom">{memeImg.bottomText}</h2>
                </div>

                <div className = "download">
                    <button onClick={handleDownloadClick}>Download</button>
                </div>
            </div>
        </main>
    )
}
