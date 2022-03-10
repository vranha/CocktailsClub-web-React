import styles from './Contactanos.module.scss';

export default function Contactanos() {
    return (
      <>
        <h2>Contact us</h2>
        <h4>Send us an e-mail</h4>
        <p>e-mail form</p>
        <h4>Our Phone number</h4>
        <p><a className={styles.email} href={`tel:${+34674411302}`}> Click to call </a>(+34674411302)</p>
      </>
    );
  }
  