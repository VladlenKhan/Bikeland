import styles from './SearchInput.module.css';

const SearchInput = () => {
    return (  
            <form className={styles.search}>
                <a href="#">
                    <img src="/loop.svg" alt="icon" />
                </a>
                <input type="text"  placeholder='Искать на сайте'/>
            </form>
    );
}
 
export default SearchInput;