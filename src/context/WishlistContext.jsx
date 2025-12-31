import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();    
export const WishlistProvider  = ({ children }) => {
    const [wishlist, setWishlist] = useState([]); 
    
    const toggleWishlist = (dish) => {
        setWishlist((prev) => {
            const isExist = prev.find((item) => item.idMeal === dish.idMeal);
            if (isExist) {
                return prev.filter((item) => item.idMeal !== dish.idMeal);
            }   
            return [...prev, dish];
        });
    };
    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);
