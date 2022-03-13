import { Carousel } from "../../components";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.carousel__container}>
        <Carousel />
      </div>
    </>
  );
}
