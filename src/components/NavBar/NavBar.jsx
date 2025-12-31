import styles from "./NavBar.module.css";
import SearchField from "../SearchField/SearchField"; 

const NavBar = ({ onSearchChange }) => {
  return (
    <div className={styles.navBar}>
      <SearchField onInputChange={onSearchChange} />  
    </div>
  );
};

export default NavBar;
