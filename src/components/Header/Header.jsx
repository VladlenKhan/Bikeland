import styles from './Header.module.css';
import List from './List/List';
import SearchInput from './SearchInput/SearchInput';
import Support from './Support/Support';

const Header = () => {
    return ( 
        <header className={styles.header}>
          
               
                <div className={styles.header__top}>
                <p className={styles.header__title}> Главная </p>
                </div>


                <div className={styles.header__bottom}>
                    <div className={styles.container}>
                        <div className={styles.inner}>
                            <div className={styles.social}>
                                <a href='#' className={styles.social__item}>
                                    <img src="/facebook.svg" alt="icon" />
                                </a>
                                <a href='#' className={styles.social__item}>
                                    <img src="/instagram.svg" alt="icon" />
                                </a>
                                <a href='#' className={styles.social__item}>
                                    <img src="/youtube.svg" alt="icon" />
                                </a>
                                <a href='#' className={styles.social__item}>
                                    <img src="/telegram.svg" alt="icon" />
                                </a>
                            </div>
                    
                            <SearchInput/>

                            <div className={styles.header__logo}>
                                <img src="" alt="logo" />
                            </div>

                            <Support/>
                        </div>
                    </div>
                    <List/>
                </div>
       
        </header>
     );
}
 
export default Header;