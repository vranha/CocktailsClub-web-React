import styles from './Register.module.scss'

export default function Register() {

    const INITIAL_STATE = {
        nombre: '',
        apellido: '',
        username: '',
        password: '',
        movil: ''    
    }

    const submitForm = (ev) => {
        ev.preventDefault();
    }

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>Regístrate</h1>
                <form className="row g-3" onSubmit={submitForm}>
                    <div className="col-md-12">
                        <label for="validationDefault01" className="form-label">First name</label>
                        <input type="text" className="form-control" id="validationDefault01" placeholder='Nombre...' required/>
                    </div>
                    <div className="col-md-12">
                        <label for="validationDefault02" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder='Apellido...' required/>
                    </div>
                    <div className="col-md-12">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-12">
                        <label for="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>  
                    <div className="col-md-12">
                        <label for="inputCity" className="form-label">Móvil</label>
                        <input type="text" className="form-control" id="inputMobile"/>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
