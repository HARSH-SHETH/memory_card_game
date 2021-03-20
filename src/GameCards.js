import React, { useState, useEffect } from 'react';

import MakeCard from './MakeCard.js';

export default function GameCards(props){
  const [images, setImages] = useState([]); 

  useEffect(() => {
    getImages(props.cards)
      .then(images => setImages(images));
  }, [props.cards]);

  if(images.length === 0){
    return(
      <h1>Loading...</h1>
    )
  }else{
    return(
      <div>
      {images.map(image => 
        <MakeCard
          image={image}
          key={image}
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
  let images = data.map((data) => data.image);
  console.log(images);
  return images;
}

async function makeURL(num){
  let url = 'https://rickandmortyapi.com/api/character/1';
  for(let i = 2; i <= num; i++){
    url = url + "," + String(i); 
  }
  console.log(url)
  return url
}
