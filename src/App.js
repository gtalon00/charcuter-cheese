import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"

import UserOpinions from "./components/UserOpinion"
import CheeseInfo from "./components/CheeseInfo"
import Home from "./components/Home"

import { Switch, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Navbar />
        
      <Switch>

        <Route exact path="/">
        <Home />
        </Route>

        <Route exact path="/cheese-paring">
        <CheeseInfo />
        </Route>

        <Route exact path="/user-opinion">
        <UserOpinions />
        </Route>
        
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
