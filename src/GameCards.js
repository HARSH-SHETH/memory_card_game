import React, { useState, useEffect } from 'react';

import MakeCard from './MakeCard.js';
import Inform from './Inform.js'

export default function GameCards(props){
  const [images, setImages] = useState([{}]); 
  const [isLoading, setIsLoading] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getImages(props.cards)
      .then((images) => {
        setImages(images)
        setTimeout(() => setIsLoading(false), 200);
        // setIsLoading(false);
      });
  }, [props.cards]);

  useEffect(() => {
    if(gameOver === true){
      props.resetScore();
    }
  }, [gameOver]);

  useEffect(() => {
    if(gameOver === true)
      setTimeout(() => {
        setGameOver(false);
      }, 300)
  }, [props.bestScore, props.score]);

  const shuffleCards = () => {
    console.log("clicked");
    let newImages = [...images];
    for(let i = newImages.length - 1; i >= 0; i--){
      let temp, j;
      j = Math.floor(Math.random() * i);
      temp = newImages[i];
      newImages[i] = newImages[j];
      newImages[j] = temp;
    }
    setImages(newImages);
    console.log("newImages: ", images);
  }

  if(gameOver){
    return(
      <Inform 
        msg="GameOver"
        level=""
      />
    )
  }else if(isLoading){
    return(
      <Inform 
        msg="Level: "
        level={props.level}
      />
    )
  }else{
    return(
      <div className="GameCards">
      {images.map((image) => 
        <MakeCard
          image={image.src}
          key={image.src}
          shuffleCards={shuffleCards}
          score={props.score}
          bestScore={props.bestScore}
          changeScore={props.changeScore}
          resetScore={props.resetScore}
          setGameOver={setGameOver}
        />
      )}
      </div>
    )
  }
}

async function getImages(numberOfImages){
  let url = await makeURL(numberOfImages);
  let data = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow'
  });
  data = await data.json();
  let images = data.map((data) => {
    return {
      src: data.image,
      isClicked: false
    }
  });
  console.log(images);
  return images;
}

async function makeURL(num){
  let url = 'https://rickandmortyapi.com/api/character/';
  let imageRangeString = '';
  for(let i = 1; i <= num; i++){
    imageRangeString = imageRangeString + "," + String(i); 
  }
  url += imageRangeString;
  console.log(url)
  return url
}
