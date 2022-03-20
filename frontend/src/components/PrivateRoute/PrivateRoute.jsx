// import { connect } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute = ({ user, component }) => {
    const location = useLocation();
    console.log('Dentro de private');

    if (!component)
        throw new Error('Necesitas añadir una prop "component" al componente <PrivateRoute component={...} />');

    if (user === null) return <div>Cargando usuario...</div>;

    if (user === false) return <Navigate to="/login" state={{ prevRoute: location.pathname }} />;

    if (user) return component;
};

// export default connect(({ auth }) => ({ user: auth.user }))(PrivateRoute);
export default PrivateRoute;
