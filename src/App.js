import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header /> <Checkout />
          </Route>
          <Route path="/login">
            <Header /> <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
