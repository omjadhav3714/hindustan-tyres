import { Switch, Route } from "react-router";
import Contactus from "./Components/Contactus";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Static_Detail from "./Components/Static_Detail";
import About from "./Components/About";
import Footer from './Components/Footer'
import ProductDetail from "./Components/Product/ProductDetail";
import Allservice from "./Components/Product/Allservice/Allservice";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/product-detail/:id" component={ProductDetail} />
        <Route exact path="/contactus" component={Contactus} />
        <Route exact path="/allservice" component={Allservice}/>
        <Route exact path="/product-static/:id" component={Static_Detail}/>
        
        <Route exact path="/aboutus" component={About} />
      </Switch>
      
      <Footer/>
    </>
  );
}

export default App;
