import './App.css';
import React,{useState ,useEffect} from "react";
import { Switch ,Route ,Router} from "react-router-dom";
import Register from './components/home';
import history from './history'
function App(){
  return(
    <Router history={history}>
        <Switch>
          <Route path ='/' exact>
          <Register/>
          </Route>
          </Switch>
          </Router>
  )
}
export default App;