import styles from './Bookings.module.scss'

export default function Bookings() {
    return (
        <div className={styles.container}>
            <h2>Bookings</h2>
            <p>En esta pagina se podran ver las reservas si el usuario esta logueado</p>
        </div>
    );
}
