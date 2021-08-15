import "./App.css";
import CharacterContainer from "./Components/CharacterContainer/CharacterContainer";
import {BrowserRouter as Router} from 'react-router-dom'
import { Switch, Route } from "react-router-dom";
import CharacterQuotes from "./Components/CharacterContainer/CharacterQuotes";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";





function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="app-background"/>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/characters/">
            <CharacterContainer />
          </Route>
          <Route path="/characters/:id">
            <CharacterQuotes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

