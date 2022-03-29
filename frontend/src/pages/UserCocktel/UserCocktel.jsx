import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postUserCocktel, useAuthDispatch, useAuthState } from '../../context';
import styles from './UserCocktel.module.scss'
import { motion } from "framer-motion"
import { Button, Form } from 'react-bootstrap';
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";


const containerVariants = {
    hidden: {
       
        opacity:0,
        
    },
    show: {
       
        opacity:1,
    },
  }

const INITIAL_STATE = {
    licor: '',
    // apellido: '',
    ingrediente: '',
    extra: '',
    // role: 'USER_ROLE', //modificado en el método passport
    // movil: ''    
}

export default function UserCocktel() {
    const [userCocktel, setUserCocktel] = useState(INITIAL_STATE);
    const dispatch = useAuthDispatch();
    const state = useAuthState();

    const inputChange = (ev) => {
        const { id, value } = ev.target;

        setUserCocktel({
            ...userCocktel,
            [id]: value,
        });
    };

    const submitForm = async (ev) => {
        ev.preventDefault();

        console.log(ev.target);

        try {
            // console.log(user);
            // const response = await registerUser(dispatch, user);
            // await registerUser(dispatch, user);
            // console.log(response);
            // if (!response.user) return; //error de propiedades indefinidas
        } catch (error) {
            console.log('Catch', error);
        }
    }

    return (
        <motion.div className={styles.container} variants={containerVariants} initial="hidden" animate="show">
            <div className={styles.register}>
                <div className={styles.formContainer}>
                    <h1 className={styles.title}>Pide tu Cocktel favorito</h1>
                    <h4 className={styles.subtitle}>Selecciona los ingredientes para tu cocktel</h4>
                    <Form className=" row g-3" onSubmit={submitForm}>
                        <div className="col-md-10 w-75 mx-auto m-3">
                            <Form.Select aria-label="Default select example" name='licor' id='licor'>
                                <option id='licor' name='licor'>Selecciona Licor</option>
                                <option id='licor' name='licor' value="Whiskey">Whiskey</option>
                                <option id='licor' name='licor' value="Tequila">Tequila</option>
                                <option id='licor' name='licor' value="Ron">Ron</option>
                                <option id='licor' name='licor' value="Vodka">Vodka</option>
                            </Form.Select>
                        </div>
                        <div className="col-md-10 w-75 mx-auto m-3">
                            <Form.Select aria-label="Default select example" name='mezcla' id='mezcla'>
                                <option>Selecciona mezcla</option>
                                <option value="Coca-cola">Coca cola</option>
                                <option value="Fanta">Fanta</option>
                                <option value="Red-Bull">Red Bull</option>
                                <option value="Zumon-de-tomate">Zuma de tomate</option>
                            </Form.Select>
                        </div>
                        <div className="col-md-10 w-75 mx-auto m-3">
                            <Form.Select aria-label="Default select example" name='extra' id='extra' >
                                <option>Selecciona extra</option>
                                <option value="Canela">Canela</option>
                                <option value="Rodaja-de-limon">Rodaja de Limón</option>
                                <option value="Rodaja-de-naranja">Rodaja de naranja</option>
                                <option value="Zereza">Zereza</option>

                            </Form.Select>
                        </div>
                        <div className="col-12 ">
                            <Button type="submit" className="btn btn-primary m-3" variant="dark" style={{backgroundColor: 'var(--medium)'}}>Enviar</Button>
                        </div>
                    </Form>
                </div>
                {/* {state.error && <p style={{color: 'red'}}> { state.error } </p> } */}
            </div>
        </motion.div>
    );
}
