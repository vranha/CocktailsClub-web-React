import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, useAuthDispatch, useAuthState } from '../../context';
// import { login, reset } from '../../features/authSlice';
// import { toast } from 'react-toastify';
import toast from 'react-hot-toast';

// BOOTSTRAP IMPORTS
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Login.module.scss';


const INITIAL_STATE = {
    email: '',
    password: ''
}

export default function Login({error}) {
    const [form, setForm] = useState(INITIAL_STATE);
    const dispatch = useAuthDispatch();
    const navigate = useNavigate();
    const state = useAuthState();
    
    // const { email, password } = formData;

    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    // const { user, isError, isSuccess, message } = useSelector((state) => state.auth);
    // const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    // useEffect(() => {
    //     if (isError) {
    //         toast(`error`, {
    //             icon: '❌',
    //             style: {
    //               border: '4px solid var(--dark)',
    //               padding: '16px',
    //               color: 'var(--main)',
    //             },
    //             iconTheme: {
    //               primary: 'red',
    //               secondary: '#FFFAEE',
    //             },
    //           });
    //     }
    //     if (isSuccess || user) {
    //         navigate('/');
    //     }
    //     dispatch(reset());
    // }, [user, isError, isSuccess, message, navigate, dispatch]);

    // const onChange = (e) => {
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         [e.target.name]: e.target.value,
    //     }));
    // };

    const inputChange = (ev) => {
        const {id, value} = ev.target;

        setForm({
            ...form,
            [id]: value,
        });
    };



    const submitForm = async (ev) => {
        ev.preventDefault();

        try {
    console.log(state);

            const response = await loginUser(dispatch, form);
            // if (!response.user) return;
            // navigate('/home');
        } catch (error) {
            console.log("Error:", error);
        }

    };

    return (
        <div className={styles.container}>
            <Form className="container d-flex flex-column align-items-center" onSubmit={submitForm}>
                <h1>Vamos a tomar algo</h1>
                <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
                    <Form.Label>
                        <h3>Correo</h3>
                    </Form.Label>
                    <Form.Control
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={form.email}
                        placeholder="Introduce tu correo electrónico"
                        onChange={inputChange}
                    />
                    <Form.Text className="text-muted">Sin el no podrás entrar.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
                    <Form.Label>
                        <h3>Password</h3>
                    </Form.Label>
                    <Form.Control
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={form.password}
                        placeholder="Introduce tu Password"
                        onChange={inputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {/* {state.error && <p>{state.error}</p> } */}
                <a className={styles.linkRegister} href="/register"> <p>¿No estás registrado?</p> </a>
        </div>
    );
}
