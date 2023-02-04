import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Notfound from './pages/Notfound/Notfound';
import Navbar from './component/Navbar/Navbar';
import NavScrollExample from './component/Navbar/Navbar';
import Movies from './pages/Movies/Movies';
import ViewMovie from './pages/Movies/ViewMovie';


function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Register/> */}
      
      <BrowserRouter>
      {/* <Navbar/> */}
      <NavScrollExample/>
      <Switch>
      <Route exact path={"/"} component={Movies} />
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/register"} component={Register} />
      <Route exact path={"/view/:id"} component={ViewMovie}/>
      <Route exact path={"*"} component={Notfound} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
