import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import MenuItemDetails from "./components/MenuItem/MenuItemDetails.jsx";
import RestaurantView from "./views/RestaurantView.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <NavBar onSearchChange={ (value) => setSearchQuery(value)} />  

      <Routes>
        <Route index element={<RestaurantView searchQuery={searchQuery} />} />
        <Route path="/meals/:id" element={<MenuItemDetails />} />
        <Route path="/*" element={<p>404 Page not found</p>} />
      </Routes>
    </Router>
  );
}

// Wrap App in an ErrorBoundary to help us with development bugs

export default function WrappedApp() {
  return import.meta.env.MODE === "development" ? (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  ) : (
    <App />
  );
}
