import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, useAuthDispatch, useAuthState } from '../../context';
import styles from './Register.module.scss'

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
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>Regístrate</h1>
                <form className="row g-3" onSubmit={submitForm}>
                    <div className="col-md-12">
                        <label htmlFor="username" className="form-label">First name</label>
                        <input type="text" className="form-control" id="username" onChange={inputChange} placeholder='Nombre...' required/>
                    </div>
                    {/* <div className="col-md-12">
                        <label htmlFor="validationDefault02" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder='Apellido...' required/>
                    </div> */}
                    <div className="col-md-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" onChange={inputChange} />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" onChange={inputChange} />
                    </div>  
                    {/* <div className="col-md-12">
                        <label htmlFor="inputCity" className="form-label">Móvil</label>
                        <input type="text" className="form-control" id="inputMobile"/>
                    </div> */}
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Regístrate</button>
                    </div>
                </form>
            </div>
            {state.error && <p style={{color: 'red'}}> { state.error } </p> }
        </div>
    );
}
