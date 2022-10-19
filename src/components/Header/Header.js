import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log('context', user);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <span className='text-orange-300'>Awesome <span className='text-white'>Auth</span>
                    </span>
                </Link>
                <div>
                    <Link className='btn btn-ghost normal-case text-md' to='/'>Home</Link>
                    <Link className='btn btn-ghost normal-case text-md' to='/orders'>Orders</Link>
                    <Link className='btn btn-ghost normal-case text-md' to='/login'>Login</Link>
                    <Link className='btn btn-ghost normal-case text-md' to='/register'>Register</Link>
                    {
                        user?.email ?
                            <button onClick={handleSignOut} className='btn btn-ghost normal-case text-md mr-4'>Sign Out</button>
                            : <Link to='/login'>
                                <button className='btn btn-ghost'>Login</button>
                            </Link>
                    }
                    {user?.email && <span className='text-orange-300 hover:bg-violet-600 hover:p-4 hover:rounded-md hover:text-white'>WELCOME, {user.email}</span>}
                </div>
            </div>
        </div>
    );
};

export default Header;