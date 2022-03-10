import { Carousel } from "../../components";
import styles from "./Home.module.scss"

export default function Home() {
    return (
        <>
            <h2>Home</h2>
            <div className={styles.carousel__container}>
                <Carousel />
            </div>
        </>
    );
}
