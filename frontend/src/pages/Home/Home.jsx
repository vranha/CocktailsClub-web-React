import { useEffect } from 'react';
import { Carousel } from '../../components';
import { useAuthDispatch, useAuthState } from '../../context';
import { checkUserSession } from '../../context/actions/auth.actions';
import styles from './Home.module.scss';


export default function Home() {

    const dispatch = useAuthDispatch();
    const state = useAuthState();

    useEffect(() => {
        dispatch(checkUserSession());
    }, []);

    console.log("Home state ->", state);

    return (
        <div className={styles.container}>
            <div className={styles.carousel__container}>
                <Carousel />
            </div>
        </div>
    );
}
