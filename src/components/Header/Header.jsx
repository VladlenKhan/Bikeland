import styles from "./Header.module.scss";
import List from "./List/List";
import SearchInput from "./SearchInput/SearchInput";
import Support from "./Support/Support";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__bottom}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.social}>
              <a href="#" className={styles.social__item}>
                <img src="/facebook.svg" alt="icon" />
              </a>
              <a href="#" className={styles.social__item}>
                <img src="/instagram.svg" alt="icon" />
              </a>
              <a href="#" className={styles.social__item}>
                <img src="/youtube.svg" alt="icon" />
              </a>
              <a href="#" className={styles.social__item}>
                <img src="/telegram.svg" alt="icon" />
              </a>
            </div>

            <SearchInput />

            <div className={styles.header__logo}>
            <Link to='/'>  <img src="/bikelandlogo.png" alt="logo" /> </Link>
            </div>

            <Support />
          </div>
        </div>
        <List items={[ "МОТОЦИКЛЫ", "СКУТЕРЫ","ЭЛЕКТРОСКУТЕРЫ","ТРИЦИКЛЫ","МИНИ БАЙКИ","КВАДРОЦИКЛЫ","ДВИГАТЕЛИ","ЭКИП/АКСЕССУАРЫ/ЗАПЧАСТИ","ДИЛЕРЫ","ДОСТАВКА",]}/>
      </div>
    </header>
  );
};

export default Header;
