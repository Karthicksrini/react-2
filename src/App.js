import {BrowserRouter,Route, Switch, NavLink} from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Posts from "./Posts"

function App() {
  return (
   <BrowserRouter>
   <NavLink to="./Home">Home</NavLink>
   <NavLink to="./Posts">Posts</NavLink>

  <NavLink to ="./About">About</NavLink>

   <Switch>
   <Route exact path="/home" component={Home}></Route>
   <Route path="/about" component={About}></Route>
   <Route path="/Posts" component={Posts}></Route>

  </Switch>
   </BrowserRouter>
  );
}

export default App;
