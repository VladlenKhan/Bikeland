import styles from './List.module.css';

const List = () => {
    return ( 
        <ul className={styles.list}>
            <li className={styles.list__item}><a href="#" className={styles.list__link}>МОТОЦИКЛЫ</a></li>
            <li className={styles.list__item}><a href="#" className={styles.list__link}>СКУТЕРЫ</a></li>
            <li className={styles.list__item}><a href="#" className={styles.list__link}>МОПЕДЫ</a></li>
            <li className={styles.list__item}><a href="#" className={styles.list__link}>ЭЛЕКТРОСКУТЕРЫ</a></li>
            <li className={styles.list__item}><a href="#" className={styles.list__link}>ТРИЦИКЛЫ</a></li>
            <li className={styles.list__item}><a href="#" className={styles.list__link}>МИНИ БАЙКИ</a></li>
            <li className={styles.list__item}><a href="#" className={styles.list__link}>КВАДРОЦИКЛЫ</a></li>
            <li className={styles.list__item}><a href="#" className={styles.list__link}>ДВИГАТЕЛИ</a></li>
            <li className={styles.list__item}><a href="#" className={styles.list__link}>ЭКИП/АКСЕССУАРЫ/ЗАПЧАСТИ</a></li>
            <li className={styles.list__item}><a href="#" className={styles.list__link}>ДИЛЕРЫ</a></li>
            <li className={styles.list__item}><a href="#" className={styles.list__link}>ДОСТАВКА</a></li> 
        </ul>
     );
}
 
export default List;