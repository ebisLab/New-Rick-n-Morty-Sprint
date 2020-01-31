import React, { useState, useEffect } from "react";
import axios from 'axios'
import {
  Route,Link, Switch
} from "react-router-dom";
import CharacterCard from './CharacterCard'

export default function SearchForm(props) {
const [data, setData]= useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      
      const characters = response.data.filter(character =>{
        character.name.toLowerCase().includes(query.toLowerCase())
      });
      setData(characters);
    })
    .catch(err => console.log('the data was not returned', err))
  }, [query]);

  const handleInputChange = e =>{
    setQuery(e.target.value);
      }
 
  console.log('SearchForm =>', props)
  return (
    <section className="search-form">
<form>
  <input 
  type="text"
  onChange={handleInputChange}
  value={query}
  name="textfield"
  placeholder="search by name"
  />

</form>

{data.map(chars => 
  (
    <CharacterCard
    chars={chars}
            key={chars.id}
          />
  ))}
    </section>
  );
}
