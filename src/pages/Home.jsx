import Youtube from "./components/Youtube/Youtube";
import Slider from "./components/Slider/Slider";
import Callback from "./components/Callback/Callback";
import styles from "./App.module.scss";
import Advantages from "./components/Advantages/Advantages";
import Card from "./components/Card/Card";

const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <Advantages />
        <div className={styles.block}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div className={styles.block__button}>
          <a href="#">Загрузить еще</a>
        </div>
      </div>
      <Youtube />
      <Slider />
      <Callback />
    </div>
  );
};

export default Home;
