import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [data, setData ]= useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      setData(response.data.results)
      console.log('response => ', response.data);
    })
    .catch(err => console.log('the data was not returned', err))
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {console.log('data ===>', data)}
      {console.log('data map', data.map(item=> {return (<div>{item.name}</div>)}))}
      {/* {data.map(item=> {return (<div>{item.name}</div>)})} */}
      {/* {console.log('data map===>', data.map())} */}
      {data.map(chars=> <CharacterCard chars={chars} key={chars.id} />)}
{/* {      data.results.map(chars=> console.log('charsiee', chars))}     */}

</section>
  );
}
