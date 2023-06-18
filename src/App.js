import logo from './logo2.jpg';
import React from 'react';
import './App.css';

import { useState,useEffect } from 'react';

function App() {


 // const[meme,Setmeme]=React.useState("http://i.imgflip.com/1bij.jpg")
  const[memo,Setmemo]=React.useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"
  })
  const [allMeme,SetallMeme]=React.useState([])
  
 React.useEffect(function(){
 fetch("https://api.imgflip.com/get_memes")
 .then(res=>res.json())
 .then(data=>SetallMeme(data.data.memes))
 },[])

  function Getmeme()
  {
    console.log("clicked")
    const RandNumber = Math.floor(Math.random() *allMeme.length)
    const url = (allMeme[RandNumber].url)
    Setmemo(prevMeme => ({
      ...prevMeme,
      randomImage: url
  }))
  }
   
  function handleChange(event){
    const{name,value}=event.target
    Setmemo(prev=>({
      ...prev,
      [name]:value
    }))
  }


  return (
    <div className="App">
     
      <header className="App-header">
       <img src={logo} className="logo"/>
       <h1>MemeGenerator</h1>
       <h3>React(1)</h3>
      </header>
     
     <div className="form">
     
      <input type='text' 
             className="inputo"
             placeholder="Top Text"
             name="topText"
             onChange={handleChange}
             value={memo.topText}/>

      <input type='text' 
             className="inputo"
             placeholder="Bottom Text"
             name="bottomText"
             onChange={handleChange}
             value={memo.bottomText}/>

      <button className="butto" onClick={Getmeme}>Get New MEME IMAGE</button> 
     </div>
  <div className="meme">
   <img src={memo.randomImage} className="meme--image"/>
   <h2 className="meme--text top">{memo.topText}</h2>
   <h2 className="meme--text bottom">{memo.bottomText}</h2>
    </div>
    </div>
  );
}

export default App;
