import { Link } from "react-router-dom";  
import { useWishlist } from "../../context/WishlistContext";
import styles from "./NavBar.module.css";
import SearchField from "../SearchField/SearchField"; 

const NavBar = ({ onSearchChange }) => {
  const { wishlist } = useWishlist();

  return (
    <div className={styles.navBar}>
      <div className={styles.navLinks}>
        <Link to="/" className={styles.link}> Home </Link>
        <Link to="/wishlist" className={styles.link}>
          Wishlist ({wishlist.length})
        </Link>
      </div>

      <SearchField onInputChange={onSearchChange} />  
    </div>
  );
};

export default NavBar;
