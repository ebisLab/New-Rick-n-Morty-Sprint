import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  const [data, setData ]= useState([]);
  const [updateData, setUpdateData] = useState([])
  // const [query, setQuery] = useState('');
  // TODO: Add useState to track data from useEffect
  const searchHandlerFunction = e =>{
    setUpdateData(e);
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      setData(response.data.results)
      setUpdateData(response.data.results);
      console.log('response => ', response.data);
     
      // setData(characters);
    })
    .catch(err => console.log('the data was not returned', err))
  }, []);



  return (
    <section className="character-list">
      <SearchForm data={data} setData={setData} search={searchHandlerFunction} />
      <h2>TODO: `array.map()` over your state here!</h2>
      {console.log('data ===>', data)}

      {data.map(chars=> <CharacterCard chars={chars} key={chars.id} />)}

</section>
  );
}
