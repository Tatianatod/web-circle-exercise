import styles from "./SearchField.module.css";

const SearchField = ( { onInputChange }) => {
  
  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Filter dishes..."
        type="text"
        onChange ={(e) => onInputChange(e.target.value)}    
      />
    </div>
  );
};

export default SearchField;
