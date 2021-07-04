import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./Navbar";
import VendingMachine from "./VendingMachine";
import CandyBar from "./CandyBar";
import Soda from "./Soda";
import FruitRollup from "./FruitRollup";

function App() {
  return (
    <div className="App">
      <h1>React Router Vending Machine</h1>
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/CandyBar">
          <CandyBar />
        </Route>
        <Route exact path="/Soda">
          <Soda />
        </Route>
        <Route exact path="/FruitRollup">
          <FruitRollup />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
