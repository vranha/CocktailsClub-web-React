import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

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
        // dispatch(login(userData));
        console.log(userData);
        return userData;
    };

    return (
        <>
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
        </>
    );
}
