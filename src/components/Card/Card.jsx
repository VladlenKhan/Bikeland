import { useState } from 'react';
import styles from './Card.module.scss';

const Card = () => {

    const [heartClicked, setHeartClicked] = useState(false);

    const toggleHeart = () => {
        setHeartClicked(prevHeartClicked => !prevHeartClicked);
    };

    const heartClassName = `${styles.card__heart} ${heartClicked ? styles.clicked : ''}`;

    return ( 
        <div className={styles.card}>
            <div className={styles.card__img}>
                <div className={styles.card__container}>
                    <div className={styles.card__new}>
                        <p className={styles.card__new_text}>Новинка</p>
                    </div>
                    <div className={heartClassName} onClick={toggleHeart} >
                       {heartClicked 
                           ? <img src="/heartred.svg" alt="icon" />
                           : <img src='/heart.svg' alt='icon' />
                       }
                    </div>
                </div>
            </div>
            <div className={styles.card__block}>
                <p className={styles.card__title}>Ducati Panigale Superleggera V4</p>
                <p className={styles.card__desc}>Аэродинамический обвес Superleggera превосходит не только доступные опции для Panigale V4 и V4 R, но и даже ...</p>
                <p className={styles.card__price}>20 880 000 UZS</p>
                <div className={styles.card__buttons}>
                    <a href="#" className={styles.card__button_outline}>Смотреть подробнее</a>
                    <a href="#" className={styles.card__button_red}>Заказать</a>
                </div>
            </div>
        </div>
     );
     
}
 
export default Card;