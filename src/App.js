import { Switch, Route } from "react-router";
import './App.css';
import Contactus from "./Components/Contactus";
import Fotter from "./Components/Fotter";
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";

function App() {
  return (
    <>
<Header/>

<Switch>

<Route exact path="/" component={Main} />
<Route exact path="/contactus" component={Contactus} />
<Route exact path="/aboutus" component={About} />
</Switch>
<Fotter />
</>
  );
}

export default App;
