import styles from "./Youtube.module.scss";

const Youtube = () => {
  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.wrapper__item}>
          <iframe width="100%" height="100% " src="https://www.youtube.com/embed/h2eeD4DHDes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className={styles.wrapper__item_column}>
          <iframe width='400px' height='100%' src="https://www.youtube.com/embed/h2eeD4DHDes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width='400px' height='100%' src="https://www.youtube.com/embed/h2eeD4DHDes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className={styles.wrapper__button} style={{cursor:'pointer'}}>
                <a href="#">Смотреть больше</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
