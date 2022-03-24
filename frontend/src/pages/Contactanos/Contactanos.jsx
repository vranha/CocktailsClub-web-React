import axios from "axios";
import { useState } from "react";

import styles from "./Contactanos.module.scss";

export default function Contactanos() {
    const [sent, setSent] = useState(false);
    const [text, setText] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSend = async () => {
        setSent(true);
        try {
            await axios.post("http://localhost:4000/send_mail", {
                text, name, email, phone
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.container}>
            <h2>Contáctanos</h2>
            <h4>Envíanos un e-mail</h4>
            {!sent ? (
                <div className="container p-4">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={handleSend} variant="dark">
                
                                    <div className="form-group">
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" className="form-control" placeholder="Name" autoFocus required/>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" className="form-control" required/>
                                    </div>
                
                                    <div className="form-group">
                                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} name="phone" placeholder="Phone" className="form-control"/>
                                    </div>
                
                                    <div className="form-group">
                                        <textarea value={text} onChange={(e) => setText(e.target.value)}  name="message" rows="3" placeholder="Message" className="form-control" required/>
                                    </div>
                
                                    <button className="btn btn-primary btn-block">
                                        Send
                                    </button>
                
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            ) : (
                <div>
                    <h3>Email enviado</h3>
                    <p>Muchas Gracias por ponerte en contacto con nosotros.</p>
                </div>
            )}

            <h4>Nuestro número de teléfono</h4>
            <p>
                <a className={styles.email} href={`tel:${+34684411802}`}>
                    {" "}
                    Click to call{" "}
                </a>
                (+34684411802)
            </p>
        </div>
    );
}



