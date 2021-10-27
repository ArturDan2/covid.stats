import React,{useEffect} from "react";
//Components
import Home from "./components/Home";
import Nav from "./components/Nav"
//History
import { useHistory } from "react-router-dom";

//Style
import GlobalStyles from "./components/GlobalStyles";
//Router
import {Route} from 'react-router-dom';


function App() {
  const history = useHistory();

  useEffect(()=> {
    history.push('/')
  })// restarting history

  return (
    <div>
      <GlobalStyles/>
      <Nav/>
      <Route path={['/country/:id', '/']}>
        <Home/>
      </Route>
    </div>
  );
}

export default App;

