import React from 'react';
import {
  MDBFooter,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdb-react-ui-kit';
import './Footer.module.scss';
export default function App() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <div className='container p-4 pb-0'>
        <section className='mb-4'>
          <a
            className='btn btn-outline-light btn-floating m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a
            className='btn btn-outline-light btn-floating m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </a>

          <a
            className='btn btn-outline-light btn-floating m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </a>
          <a
            className='btn btn-outline-light btn-floating m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </a>

          <a
            className='btn btn-outline-light btn-floating m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a
            className='btn btn-outline-light btn-floating m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </a>
        </section>


        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Contacto</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                  
                <a href='#!' className='text-light'>
                <MDBIcon fas icon="envelope-square" /> ejemplo@ejemplo.com
                </a>
              </li>
              <li>
                <a href='#!' className='text-light'>
                <MDBIcon fas icon="mobile-alt" /> 555-777-555
                </a>
              </li>


              {/* <li>
                <a href='#!' className='text-light'>
                  999-999-999
                </a>
              </li>
              <li>
                <a href='#!' className='text-light'>
                  Link 4
                </a>
              </li> */}


            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-2'>Encuentranos en</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <div className="iframe">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.4447373229837!2d6.13840811590388!3d46.20160717911657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64d5f53316c1%3A0x17527e207b94d3c5!2sCirkus%20Bar!5e0!3m2!1sca!2ses!4v1646923722213!5m2!1sca!2ses" title="location"  loading="lazy"></iframe>
                </div>
              </li>

            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>sobre nosotros</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <p>
                    <MDBIcon fas icon="info" /> Club de Cocktelería
                  Nos especializamos en los mejores cockteles de la ciudad
                </p>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-3'>Registrate</h5>

            <p className='d-flex justify-content-center align-items-center'>
            <span className='me-3'>Regístrate gratis</span>
            <button type='button' className='btn btn-primary btn-rounded'>
              Sign up!
            </button>
          </p>
          </MDBCol>
        </MDBRow>





      </div>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
            COCKTAILS CLUB
        </a>
      </div>
    </MDBFooter>
  );
}