import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar'; // Import the Navbar component
import Home from './components/Home'; // Import your other components
import NewDiaryEntry from './components/NewDiaryEntry';
import ViewDiaryEntries from './components/ViewDiaryEntries'; 

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/newdiaryentry">
          <NewDiaryEntry/>
        </Route>

        <Route exact path="/viewdiaryentries">
          <ViewDiaryEntries/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
