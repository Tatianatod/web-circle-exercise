import { Link } from "react-router-dom";  
import { useWishlist } from "../../context/WishlistContext";
import styles from "./NavBar.module.css";
import SearchField from "../SearchField/SearchField"; 

const NavBar = ({ onSearchChange }) => {
  const { wishlist } = useWishlist();

  return (
    <nav className={styles.navBar}>
      <div className={styles.leftSection}>
        <Link to="/" className={styles.navLink}> Home </Link>
        <Link to="/wishlist" className={styles.navLink}> Wishlist {wishlist.length > 0 && <span className={styles.badge}>{wishlist.length}</span>}
        </Link>
      </div>

      <div className={styles.rightSection}>
        <SearchField onInputChange={onSearchChange} />  
    </div>
    </nav>
  );
};

export default NavBar;
