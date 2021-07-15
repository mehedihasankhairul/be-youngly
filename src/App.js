import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { About } from "./components/Pages/About/About";
import { Contact } from "./components/Pages/Contact/Contact";


function App() {
  return (
    <>
      <Router>
        <NavBar />


        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>

      </Router>
    </>
  );
}

export default App;
