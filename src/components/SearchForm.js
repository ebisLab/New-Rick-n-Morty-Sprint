import React, { useState, useEffect } from "react";
import axios from 'axios'
import {
  Route,Link, Switch
} from "react-router-dom";
import CharacterCard from './CharacterCard'

export default function SearchForm(props) {
const [data, setData]= useState([]);
  const [query, setQuery] = useState('');

  const handleChanges = e => {
    setQuery(e.target.value);
  }

  // const submitHandler = e =>{
  //   e.preventDefault();
  //   const searchChar = props.characters.filter(char => {
  //     console.log('charlower-->', char.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  //     // return (char.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  //    });
  //    props.search(searchChar);
  //    console.log(searchChar)
  // }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      const characters=
      response.data.results.filter(character => character.name.toLowerCase().includes(query.toLowerCase()))
      setData(characters);
      // setUpdateData(response.data.results);
      // console.log('response => ', response.data);
     
      // setData(characters);
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
  id="character"
  type="text"
  onChange={handleInputChange}
  value={query}
  name="character"
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
