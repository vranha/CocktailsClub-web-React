import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

export default function Conocenos() {
    return (
        <Accordion defaultActiveKey="0" className="container my-5 text-light">
            <Accordion.Item eventKey="0" className="bg-dark">
                <Accordion.Header className="bg-dark">Carlos</Accordion.Header>
                <Accordion.Body className="bg-dark">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="bg-dark">
                <Accordion.Header className="bg-dark">Daniel</Accordion.Header>
                <Accordion.Body className="bg-dark">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="bg-dark">
                <Accordion.Header className="bg-dark">Jordi</Accordion.Header>
                <Accordion.Body className="bg-dark">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="bg-dark">
                <Accordion.Header className="bg-dark">Oriol</Accordion.Header>
                <Accordion.Body className="bg-dark">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}
