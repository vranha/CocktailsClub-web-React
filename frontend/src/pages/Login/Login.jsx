import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../../features/authSlice';
import { toast } from 'react-toastify';

// BOOTSTRAP IMPORTS
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Login.module.scss';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isError, isSuccess, message } = useSelector((state) => state.auth);
    // const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess || user) {
            navigate('/');
        }
        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };
        dispatch(login(userData));
        // console.log(userData);
        // return userData;
    };

    return (
        <div className={styles.container}>
            <Form className="container d-flex flex-column align-items-center" onSubmit={onSubmit}>
                <h1>Vamos a tomar algo</h1>
                <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
                    <Form.Label>
                        <h3>Correo</h3>
                    </Form.Label>
                    <Form.Control
                        type="email"
                        className="form-control"
                        // id="email"
                        name="email"
                        value={email}
                        placeholder="Introduce tu correo electrónico"
                        onChange={onChange}
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
                        // id="password"
                        name="password"
                        value={password}
                        placeholder="Introduce tu Password"
                        onChange={onChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
