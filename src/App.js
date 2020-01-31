import React from "react";
import {
  Link, Switch
} from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'


export default function App() {
  return (
    <main>
      <Header />
      <CharacterList />
    </main>
  );
}
