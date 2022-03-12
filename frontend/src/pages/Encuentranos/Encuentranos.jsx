import styles from './Encuentranos.module.scss';

export default function Encuentranos() {
    return (
      <>
        <div className={styles.mapContainer}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.4447373229837!2d6.13840811590388!3d46.20160717911657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64d5f53316c1%3A0x17527e207b94d3c5!2sCirkus%20Bar!5e0!3m2!1sca!2ses!4v1646923722213!5m2!1sca!2ses" title="location"  loading="lazy"></iframe>
          </div>
      </>
    );
  }
  