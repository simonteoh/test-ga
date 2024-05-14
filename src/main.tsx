import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ReactGA from "react-ga4";

ReactGA.initialize("G-Z0ZFQL7H73");
ReactGA.send({ hitType: "pageview", page: "/", title: "Home page" });

// Send a custom event
ReactGA.event({
  category: "your category",
  action: "your action",
  label: "your label", // optional
  value: 99, // optional, must be a number
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
