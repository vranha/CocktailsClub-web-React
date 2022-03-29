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
            rel='noreferrer'
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
  
                  <a className={styles.text} href="mailto:cockteles@cocktails.com?Subject=Queridos%20cocteleros...">
                  <MDBIcon fas icon="envelope-square" className='m-2' style={{color: 'var(--medium)'}} /> cockteles@cocktails.com
                  </a>
                </li>
                <li>
                  <a className={styles.text} href={`tel:${978455757}`}>
                  <MDBIcon fas icon="mobile-alt" className='m-2' style={{color: 'var(--medium)'}} /> 978-455-757
                  </a>
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
            {/* <h5 className={styles.textTittle}>Nuestra Carta</h5> */}

            <div className={styles.mb0}>
              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to='/about' className={styles.noDecoration}>
                      <p className={styles.text}> <MDBIcon fas icon="info" className="m-2" style={{color: 'var(--medium)'}} /> Nuestra carta</p>
                  </Link>
                </li>
              </ul>
            </div>

          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

            
              <div className={styles.mb0}>

                <p className={styles.registerFree}>
  
                  <Button onClick={() => navigate('/register')} variant="dark" style={{backgroundColor: 'var(--medium)'}} > Regístrate   </Button>
                </p>
              </div>

          </MDBCol>
        </MDBRow>





      </div>

      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', color : 'rgba(255, 255, 255, 0.55)' }}>
        © 2022 Copyright
      
      </div>
    </MDBFooter>
  );
}