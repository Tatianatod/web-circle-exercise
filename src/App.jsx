import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { WishlistProvider } from "./context/WishlistContext"; 

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import MenuItemDetails from "./components/MenuItem/MenuItemDetails.jsx";
import RestaurantView from "./views/RestaurantView.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import WishlistView from "./components/WishlistView.jsx";

import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <WishlistProvider>
    <Router>
      <NavBar onSearchChange={ (value) => setSearchQuery(value)} />  
      <Routes>
        <Route index element={<RestaurantView searchQuery={searchQuery} />} />
        <Route path="/meals/:id" element={<MenuItemDetails />} />
        <Route path="/wishlist" element={<WishlistView />} />
        <Route path="/*" element={<p>404 Page not found</p>} />
      </Routes>
    </Router>
    </WishlistProvider>
  );
}

export default function WrappedApp() {
  return import.meta.env.MODE === "development" ? (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  ) : (
    <App />
  );
}
