import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser, useAuthDispatch, useAuthState } from '../../context';
import styles from './Register.module.scss'
import { motion } from "framer-motion"
import { Button, Form } from 'react-bootstrap';

const containerVariants = {
    hidden: {
       
        opacity:0,
        
    },
    show: {
       
        opacity:1,
    },
  }

const INITIAL_STATE = {
    username: '',
    // apellido: '',
    email: '',
    password: '',
    // role: 'USER_ROLE', //modificado en el método passport
    // movil: ''    
}

export default function Register() {
    const [user, setUser] = useState(INITIAL_STATE);
    const dispatch = useAuthDispatch();
    const navigate = useNavigate();
    const state = useAuthState();

    const inputChange = (ev) => {
        const { id, value } = ev.target;

        setUser({
            ...user,
            [id]: value,
        });
    };

    const submitForm = async (ev) => {
        ev.preventDefault();

        try {
            // console.log(user);
            // const response = await registerUser(dispatch, user);
            await registerUser(dispatch, user);
            // console.log(response);
            // if (!response.user) return; //error de propiedades indefinidas
            navigate('/login');
        } catch (error) {
            console.log('Catch', error);
        }
    }

    return (
        <motion.div className={styles.container} variants={containerVariants} initial="hidden" animate="show">
            <div className={styles.register}>
                <div className={styles.formContainer}>
                    <h1 className={styles.title}>Regístrate</h1>
                    <h4 className={styles.subtitle}>Para poder hacer tu pedido desde la web</h4>
                    <Form className=" row g-3" onSubmit={submitForm}>
                        <div className="col-md-12 w-75 mx-auto m-3">
                            <label htmlFor="username" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="username" onChange={inputChange} placeholder='ex: MisterCoctel95' required/>
                        </div>
                        {/* <div className="col-md-12">
                            <label htmlFor="validationDefault02" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="validationDefault02" placeholder='Apellido...' required/>
                        </div> */}
                        <div className="col-md-12 w-75 mx-auto m-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder='ex: MisterCoctel95@coldmail.com' onChange={inputChange} required />
                        </div>
                        <div className="col-md-12 w-75 mx-auto m-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="password" placeholder='********' onChange={inputChange} required />
                        </div>
                        {/* <div className="col-md-12">
                            <label htmlFor="inputCity" className="form-label">Móvil</label>
                            <input type="text" className="form-control" id="inputMobile"/>
                        </div> */}
                        <div className="col-12 ">
                            <Button type="submit" className="btn btn-primary m-3" variant="dark" style={{backgroundColor: 'var(--medium)'}}>Regístrate</Button>
                        </div>
                    </Form>
                </div>
                {state.error && <p style={{color: 'red'}}> { state.error } </p> }
                <Link className={styles.linkLogin} to="/login"> <p>¿Ya tienes cuenta?</p> </Link>
            </div>
        </motion.div>
    );
}
