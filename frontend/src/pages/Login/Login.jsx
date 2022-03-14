import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    return (
        <>
            <Form className="container d-flex flex-column align-items-center">
                <h1>Vamos a tomar algo</h1>
                <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
                    <Form.Label>
                        <h3>Correo</h3>
                    </Form.Label>
                    <Form.Control type="email" placeholder="Introduce tu correo electrónico" />
                    <Form.Text className="text-muted">Sin el no podrás entrar.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
                    <Form.Label>
                        <h3>Password</h3>
                    </Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}
