import List from "../Header/List/List";
import styles from "./Footer.module.scss";
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.wrapper__logo}>
           <Link to='/main'> <img src="/bikelandlogo.png" alt="" /> </Link>
          </div>
          <div className={styles.block}>
            <div className={styles.block__item}>
              <div className={styles.block__img}>
                <img src="/handwhite.svg" alt="" />
              </div>
              <p className={styles.block__title}>Опыт</p>
              <p className={styles.block__desc}>На рынке Узбекистана</p>
            </div>
            <div className={styles.block__item}>
              <div className={styles.block__img}>
                <img src="/motowhite.svg" alt="" />
              </div>
              <p className={styles.block__title}>Профессионализм</p>
              <p className={styles.block__desc}>
                40+ Моделей Мото-техники в наличии
              </p>
            </div>
            <div className={styles.block__item}>
              <div className={styles.block__img}>
                <img src="/shieldwhite.png" alt="" />
              </div>
              <p className={styles.block__title}>Доверие</p>
              <p className={styles.block__desc}>
                3000+ Счастливых обладателей <br /> нашей Мото-техники
              </p>
            </div>
          </div>
          <div className={styles.contact}>
            <div className={styles.contact__payment}>
              <div className={styles.contact__title}>
                <p>
                  Принимаем оплату: <br />
                  Наличными, через банковский перевод или через платежные
                  системы
                </p>
              </div>
              <div className={styles.contact__img}>
                <img src="/paymeicon.png" alt="icon" />
                <img src="/apelsin.png" alt="icon" />
                <img src="/click.png" alt="icon" />
              </div>
            </div>
            <div className={styles.contact__number}>
              <p className={styles.contact__title}>Контакты для связи:</p>
              <ul className={styles.item}>
                <li>
                 <a href="#"><img src="telicon.svg" alt="icon" /> +998555006001</a> 
                </li>
                <li className={styles.item}>
                <a href="#">  <img src="telicon.svg" alt="icon" />+998936216001</a> 
                  </li>
                <li className={styles.item}>
                <a href="#">  <img src="mailicon.svg" alt="icon" />info@bikeland.uz</a> 
                    </li>
              </ul>
            </div>
           
          </div> 
         <List items={[ "МОТОЦИКЛЫ", "СКУТЕРЫ","ЭЛЕКТРОСКУТЕРЫ","ТРИЦИКЛЫ","МИНИ БАЙКИ","КВАДРОЦИКЛЫ","ДВИГАТЕЛИ","ЭКИП/АКСЕССУАРЫ/ЗАПЧАСТИ","ДИЛЕРЫ","ДОСТАВКА","БЛОГ","РАБОТА У НАС"]}/>
        <div className={styles.icons}>
            <div className={styles.icons__img}><a href="#"><img src="/tgbig.svg" alt="icon" /></a></div>
            <div className={styles.icons__img}><a href="#"><img src="/instbig.svg" alt="icon" /></a></div>
            <div className={styles.icons__img}><a href="#"><img src="/facebookbig.svg" alt="icon" /></a></div>
            <div className={styles.icons__img}><a href="#"><img src="/youtubebig.svg" alt="icon" /></a></div>
        </div>
        <div className={styles.policy}>
            © Все права защищены. Bikeland.uz & HAYAT CO LTD 2004-2023
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
