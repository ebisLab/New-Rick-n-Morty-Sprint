import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled from 'styled-components'
import {
  Route,Link, Switch
} from "react-router-dom";
import CharacterCard from './CharacterCard'

export default function SearchForm(props) {
  const Card = styled.div` 
  display: flex;
//  flex-direction: column;
justify-content: center;
text-align: center;
`
const Header = styled.h1`
  color: tomato;
  text-align: center;
`
const Header3 = styled.h3`
  color: palevioletred
`

 const Info = styled.div`
 //  border: 1px solid tomato;
`


const [data, setData]= useState([]);
  const [query, setQuery] = useState('');


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      const characters=
      response.data.results.filter(character => character.name.toLowerCase().includes(query.toLowerCase()))
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
