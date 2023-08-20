import styles from "./Callback.module.scss";

const Callback = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>ОБРАТНЫЙ ЗВОНОК</p>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__item}>
          <div className={styles.block}>
            <div className={styles.block__bg}>
              <div className={styles.block__img}>
                <img src="/minlogo.svg" alt="" />
              </div>
            </div>
            <div className={styles.block__text}>
              <p>
                Хает Хидоятов, создатель Bikeland.uz вдохновивший тысячи
                мотолюбителей со всего Узбекистана и СНГ
              </p>
            </div>
          </div>
        </div>
        <div className={styles.wrapper__item2}>
          <p>Вы можете заказать обратный звонок и мы перезвоним Вам сами </p>
          <form className={styles.form}>
            <label htmlFor="1" className={styles.form__label}>
              Как к вам обращаться?
            </label>
            <br />
            <input
              type="text"
              id="1"
              placeholder="Введите имя"
              className={styles.form__input}
            />
            <label htmlFor="2" className={styles.form__label}>
              На какой номер вам перезвонить?
            </label>
            <br />
            <input
              type="text"
              id="2"
              placeholder="Введите номер +998"
              className={styles.form__input}
            />
            <label htmlFor="3" className={styles.form__label}>
              Ваш город или регион?
            </label>
            <br />
            <input
              type="text"
              id="3"
              placeholder="Название города, региона"
              className={styles.form__input}
            />
            <label className={styles.form__label}>Откуда узнали о нас?</label>
            <div className={styles.check}>
              <div className={styles.check__item}>
                <div className={styles.check__elem}>
                  <input type="checkbox" id="4" />
                  <label htmlFor="4" className={styles.form__label}>
                    Посоветовали друзья
                  </label>
                </div>
                <div className={styles.check__elem}>
                  <input type="checkbox" id="5" />
                  <label htmlFor="5" className={styles.form__label}>
                    Посетил шоурум
                  </label>
                </div>
              </div>
              <div className={styles.check__item}>
                <div className={styles.check__elem}>
                  <input type="checkbox" id="6" />
                  <label htmlFor="6" className={styles.form__label}>
                    YouTube
                  </label>
                </div>
                <div className={styles.check__elem}>
                  <input type="checkbox" id="7" />
                  <label htmlFor="7" className={styles.form__label}>
                    Telegram
                  </label>
                </div>
              </div>
              <div className={styles.check__item}>
                <div className={styles.check__elem}>
                  <input type="checkbox" id="8" />
                  <label htmlFor="8" className={styles.form__label}>
                    Instagram
                  </label>
                </div>
                <div className={styles.check__elem}>
                  <input type="checkbox" id="9" />
                  <label htmlFor="9" className={styles.form__label}>
                    Facebook
                  </label>
                </div>
              </div>
            </div>
            <div style={{display:'flex',justifyContent:'center', alignItems: 'center', marginTop: '66px'}}>
            <div className={styles.form__button}>
              <a href="#" className={styles.form__link}>Заказать звонок</a>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Callback;
