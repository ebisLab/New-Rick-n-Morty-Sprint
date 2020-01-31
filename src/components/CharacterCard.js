import React from "react";
import styled from 'styled-components'
export default function CharacterCard(props) {

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
  console.log(props.chars)
  return (
    <Card>
      <Info>
    <Header>{props.chars.name}</Header>
    <img src={props.chars.image} />
    <Header3>{props.chars.status}</Header3>
    <Header3>{props.chars.species}</Header3>
    </Info>
  </Card>
  )
}
