import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Elements, StripeProvider } from 'react-stripe-elements';


ReactDOM.render(

  <StripeProvider apiKey="pk_test_koJHttmL6skg3daD7CyNdHDx005rvKOV8O">
    <Elements>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Elements>
  </StripeProvider>,
  document.getElementById("root")
);
