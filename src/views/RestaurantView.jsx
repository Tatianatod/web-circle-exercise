import { useEffect, useState } from "react";
import { useDebouncedCallback } from 'use-debounce';
import MenuItem from "../components/MenuItem/MenuItem.jsx";

import styles from "./RestaurantView.module.css";
import NavBar from "../components/NavBar/NavBar.jsx";
import SearchField from "../components/SearchField/SearchField.jsx";

const RestaurantView = ({ searchQuery }) => {
  const [dishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useDebouncedCallback takes a function as a parameter and as the second parameter
  // the number of milliseconds it should wait until it is actually called so a user
  // can type freely and as long as they are typing a letter quicker than 500ms, the function won't fire yet.
  // This is to optimize user experience and communication with the server
  const fetchData = useDebouncedCallback((query) => {
    setIsLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then((res) => (res.ok ? res.json() : { meals: null })) 
    .then((result) => {
      setDishes(result.meals ?? []);
      setIsLoading(false);
    })
    .catch(() => {
      setDishes([]);
      setIsLoading(false);
    });
  }, 500);

  useEffect(() => {
    fetchData(searchQuery);
  }, [searchQuery, fetchData]);
    

    return (
      <div className={styles.restaurantWrapper}>
        <div className={styles.menu}>
          {isLoading ? (
            <p>Loading...</p>
          ) : dishes.length > 0 ? (
            dishes.map((dish) => (
              <MenuItem dish={dish} key={dish.idMeal} />
            ))
          ) : ( 
            <p>No dishes found </p>)}
        </div>
      </div>
    );
  }

    
export default RestaurantView;
