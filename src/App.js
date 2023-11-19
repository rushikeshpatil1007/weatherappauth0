
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Login from "./components/Login";
import Home from "./components/HomePage";
import Details from "./components/Details"; // Import the new component
import NotFound from './components/NotFound'


const App = () => {
  return (
    <Auth0Provider
      domain="dev-t7pkexwuk5o22gpr.us.auth0.com"
      clientId="Ro6TnqTw9Rd8oO2U9wM5rEVtZIfj8rBS"
      redirectUri={window.location.origin}
    >
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/details/:cityName" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
};

export default App;
