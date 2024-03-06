import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { trackPageView } from "@snowplow/browser-tracker";
import { createSnowplowEcommerceAction, createSubscription, trackPurchaseSubscription } from "./snowtype/snowplow.js";

function App() {
  useEffect(() => {
    console.log('Hello from useEffect!');
  
    trackPageView();

    const transaction = createSnowplowEcommerceAction({
      type: "add_to_cart"
    });

    const subscription = createSubscription({
      tier: "unlimited"
    });

    trackPurchaseSubscription({
      transaction,
      context: [subscription]
    });




    
  
    
  }, [App]);

  console.log('Hello from the App component!');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;
