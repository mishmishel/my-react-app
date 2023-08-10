import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import NewDiaryEntry from './components/NewDiaryEntry';
import ViewDiaryEntries from './components/ViewDiaryEntries'; 
import EntryDetails from './components/EntryDetails';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/newdiaryentry">
          <NewDiaryEntry/>
        </Route>

        <Route path="/viewdiaryentries/:id">
          <EntryDetails />
        </Route>

        <Route path="/viewdiaryentries">
          <ViewDiaryEntries/>
        </Route>

        <Route path="*">
          <h1>404 not found</h1>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
