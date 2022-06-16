import { Switch, Route } from "react-router";
import Contactus from "./Components/Contactus";
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import ProductDetail from "./Components/Product/ProductDetail";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/product-detail" component={ProductDetail} />
        <Route exact path="/contactus" component={Contactus} />
        <Route exact path="/aboutus" component={About} />
      </Switch>
    </>
  );
}

export default App;
