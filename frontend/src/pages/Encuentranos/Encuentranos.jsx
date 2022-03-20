import styles from './Encuentranos.module.scss';
import metro from '../../assets/1024px-Barcelona_Metro_Logo.svg.png'
import L3 from '../../assets/L3_barcelona.svg.png'
import fgc from '../../assets/logo-FGC-square.png'

export default function Encuentranos() {
    return (
      <div className={styles.container}>
        <div className={styles.directions}>
          <div className={styles.logos_metro}>
            <img src={metro} alt="metro icone" ></img>
            <img src={L3} alt="metro icone" ></img>
          </div>
            <p>Metro: L3 Lesseps</p>
          <div className={styles.logos_fgc}>
            <img src={fgc} alt="metro icone" ></img>
          </div>
            <p>FGC: Gracia</p>
        </div>
        <div className={styles.mapContainer}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1779.3778813648992!2d2.1494861804753262!3d41.40568740920311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a398912e4cad%3A0x693c9efc2aa1ba63!2sBurger%20King!5e0!3m2!1ses!2ses!4v1647800303000!5m2!1ses!2ses" title="location"  loading="lazy"></iframe>
          </div>
      </div>
    );
  }
  