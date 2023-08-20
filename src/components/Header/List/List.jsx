import styles from './List.module.scss';

const List = ({ items }) => {
    return ( 
        <ul className={styles.list}>
            { items.map((item) =>  (
            <li className={styles.list__item}><a href="#" className={styles.list__link}>{ item }</a></li>
             ))} 
        </ul>
     );
}
 
export default List;