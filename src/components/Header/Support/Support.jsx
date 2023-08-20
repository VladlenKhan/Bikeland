import styles from './Support.module.scss';

const Support = () => {
    return ( 
        <a href='#' className={styles.support}>
            <img src="/tel.svg"  alt="icon" className={styles.support__icon} />
            <p className={styles.support__text}>консультант на связи 24/7</p>
        </a>
     );
}
 
export default Support;