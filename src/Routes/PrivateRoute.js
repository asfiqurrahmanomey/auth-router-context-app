import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div>
            <button className="btn loading mt-12">loading</button>
        </div>
    }

    if (user && user.uid) {
        return children;
    }

    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;