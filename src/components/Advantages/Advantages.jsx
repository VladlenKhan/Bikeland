import styles from "./Advantages.module.scss";

const Advantages = () => {
  return (
        <div className={styles.wrapper}>
          <div className={styles.wrapper__item}>
            <div className={styles.wrapper__img}>
              <img src="/v.svg" alt="" />
            </div>
            <p className={styles.wrapper__title}>Опыт</p>
            <p className={styles.wrapper__desc}>На рынке Узбекистана</p>
          </div>
          <div className={styles.wrapper__item}>
            <div className={styles.wrapper__img}>
              <img src="/v2.svg" alt="" />
            </div>
            <p className={styles.wrapper__title}>Профессионализм</p>
            <p className={styles.wrapper__desc}>
              40+ Моделей Мото-техники в наличии
            </p>
          </div>
          <div className={styles.wrapper__item}>
            <div className={styles.wrapper__img}>
              <img src="/v3.png" height='100px' alt="" />
            </div>
            <p className={styles.wrapper__title}>Доверие</p>
            <p className={styles.wrapper__desc}>
              3000+ Счастливых обладателей  <br />  нашей Мото-техники
            </p>
          </div>
        </div>
     
  );
};

export default Advantages;
