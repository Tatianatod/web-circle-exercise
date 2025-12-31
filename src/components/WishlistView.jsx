import MenuItem from "./MenuItem/MenuItem"
import { useWishlist } from "../context/WishlistContext";
import styles from "../views/RestaurantView.module.css";

const WishlistView = () => {
    const { wishlist } = useWishlist();

    return (   
        <div className={styles.restaurantWrapper}>
            <h1>My Wishlist</h1>
            {wishlist.length === 0 ? <p>Your wishlist is empty</p> : (
                <div className={styles.menu}>
                    {wishlist.map((dish) => (
                        <MenuItem   
                            key={dish.idMeal}
                            dish={dish}
                        />      
                    ))}
                </div>
            )}
        </div>
    );
}

export default WishlistView;