import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./MenuItem.module.css";
import { useWishlist } from "../../context/WishlistContext";  

const MenuItem = ({ dish }) => {
  const { strMeal: name, strMealThumb: image, idMeal } = dish;
  const navigate = useNavigate();

  const { wishlist, toggleWishlist } = useWishlist();
  const isFavorite = wishlist.some((item) => item.idMeal === idMeal);

  return (
    <div className={styles.menuItem}>
      <h3>{name}</h3>
      <img src={image} alt={name} />

      <div className={styles.menuItemBtnContainer}>
        <Button onClick={() => navigate(`/meals/${idMeal}`)}>
          Details
        </Button>

        <Button
          onClick={() => toggleWishlist(dish)}
          className={styles.wishlistIconBtn}    
        >
          {isFavorite ? (
            <span className={styles.heartBlack}> 🖤 </span> ) : (
            <span className={styles.heartWhite}> 🤍 </span>
          )}
          
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
