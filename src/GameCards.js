import React, { useState, useEffect } from 'react';

import MakeCard from './MakeCard.js';

export default function GameCards(props){
  const [images, setImages] = useState([{}]); 

  useEffect(() => {
    getImages(props.cards)
      .then(images => setImages(images));
  }, [props.cards]);

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


  if(images.length === 0){
    return(
      <h1>Loading...</h1>
    )
  }else{
    return(
      <div class="GameCards">
      {images.map((image) => 
        <MakeCard
          image={image.src}
          key={image.src}
          shuffleCards={shuffleCards}
          score={props.score}
          bestScore={props.bestScore}
          changeScore={props.changeScore}
          resetScore={props.resetScore}
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
