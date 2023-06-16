import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from "./reportWebVitals";
//IMPORT BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';
import { DarkModeContextProvider } from "./context/darkModeContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Router>
          <AuthContextProvider>
          <DarkModeContextProvider>
           
    <App />
    </DarkModeContextProvider>
    </AuthContextProvider>
    </Router>
  </React.StrictMode>,
   document.getElementById("root")
);
reportWebVitals();

