import React from "react";
import {
  Route,Link, Switch
} from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import WelcomePage from './components/WelcomePage'


export default function App() {
  return (
    <main>

      <Header />
      {/* <Welcome/> */}
      {/* {/* <Link to="/">Home</Link> */}
      <Link to="/">Home</Link>
      <Link to="/chars-list">Character List</Link>

      <Route exact path ='/' component={WelcomePage}>
      <WelcomePage />
      </Route>
      <Route exact path='/chars-list/' component={CharacterList}>
        <CharacterList/>
      </Route>
      <Route exact path='/chars-list/:charsID' component={CharacterList}>
        <CharacterList/>
      </Route>

    </main>
  );
}
