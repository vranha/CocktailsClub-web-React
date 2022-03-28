import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";

import {
  MDBFooter,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdb-react-ui-kit';
import styles from './Footer.module.scss';
export default function App() {

  const navigate = useNavigate();


  return (
    <MDBFooter className='bg-dark text-center text-light'>
      <div className='container p-4 pb-0'>
        <section className='mb-4'>
          <a
            className='btn btn-outline-light btn-floating m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='https://facebook.com'
            role='button'
            target="_blank"
            rel='noreferrer's
          >
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a
            className='btn btn-outline-light btn-floating m-1'
            style={{ backgroundColor: '#55acee' }}
            href='https://twitter.com'
            role='button'
            target="_blank"
            rel='noreferrer'
          >
            <MDBIcon fab icon='twitter' />
          </a>

          <a
            className='btn btn-outline-light btn-floating m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='https://google.com'
            role='button'
            target="_blank"
            rel='noreferrer'
          >
            <MDBIcon fab icon='google' />
          </a>
          <a
            className='btn btn-outline-light btn-floating m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://instagram.com'
            role='button'
            target="_blank"
            rel='noreferrer'
          >
            <MDBIcon fab icon='instagram' />
          </a>

          <a
            className='btn btn-outline-light btn-floating m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://es.linkedin.com/'
            role='button'
            target="_blank"
            rel='noreferrer'
          >
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a
            className='btn btn-outline-light btn-floating m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/'
            role='button'
            target="_blank"
            rel='noreferrer'
          >
            <MDBIcon fab icon='github' />
          </a>
        </section>


        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

            <h5 className={styles.textTittle}>Contacto</h5>

            <div className={styles.mb0}>
              <ul className='list-unstyled mb-0'>
              
                <li>
                    
                  <p className={styles.text}>
                  <MDBIcon fas icon="envelope-square" className='m-2' style={{color: 'var(--medium)'}} /> cockteles@cocktails.com
                  </p>
                </li>
                <li>
                  <p className={styles.text}>
                  <MDBIcon fas icon="mobile-alt" className='m-2' style={{color: 'var(--medium)'}} /> 978-455-757
                  </p>
                </li>

              </ul>
            </div>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className={styles.textTittle} >Encuentranos en</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <div className={styles.iframe}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1779.3778813648992!2d2.1494861804753262!3d41.40568740920311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a398912e4cad%3A0x693c9efc2aa1ba63!2sBurger%20King!5e0!3m2!1ses!2ses!4v1647800303000!5m2!1ses!2ses" title="location"  loading="lazy"></iframe>
                </div>
              </li>

            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className={styles.textTittle}>sobre nosotros</h5>

            <div className={styles.mb0}>
              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to='/about' className={styles.noDecoration}>
                      <p className={styles.text}> <MDBIcon fas icon="info" className="m-2" style={{color: 'var(--medium)'}} /> Conocenos Mejor </p>
                  </Link>
                </li>
              </ul>
            </div>

          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

              <h5 className={styles.textTittle}>Registrate</h5>
              <div className={styles.mb0}>

                <p className={styles.registerFree}>
                  <span className='me-3'>Regístrate gratis</span>
                  <Button onClick={() => navigate('/register')} variant="dark" style={{backgroundColor: 'var(--medium)'}} > Sign up!   </Button>
                </p>
              </div>

          </MDBCol>
        </MDBRow>





      </div>

      <div className={styles.text} style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className={styles.text} href='https://mdbootstrap.com/'>
            COCKTAILS CLUB
        </a>
      </div>
    </MDBFooter>
  );
}