import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages//home/home.component";
import Header from "./components/header/header.component";
import About from "./pages/about/about.component";
import CheckoutForm from './components/checkout/checkout-form.component'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/checkout" component={CheckoutForm} />
        </Switch>

      </div>
    );
  }
};

export default App;
