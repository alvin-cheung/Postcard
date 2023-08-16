import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { onLogin } from '../reducers/userReducer';

const Login = ( {signup} ) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.userReducer.isAuthenticated);

  const handleLogin = () => {
    // Dispatch the login action
    dispatch(onLogin({ username, password }));
  };

  return (
    <>
      <nav className='bg-teal-400 p-4 sticky top-0'>
        <div className='container mx-auto flex justify-center items-center'>
          <div className='text-white font-semibold text-5xl hover:text-cyan-700'>
            Post Card
          </div>
        </div>
      </nav>

      <div className='flex justify-center items-center h-screen'>
        <div className='w-1/4 h-1/2 p-8 bg-slate-100 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold mb-4'>Login</h2>
          <input
            type='text'
            placeholder='Username'
            className='w-full p-2 mb-2 border rounded'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            className='w-full p-2 mb-4 border rounded'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className='w-full bg-blue-500 text-white p-2 my-3 rounded hover:bg-blue-800'
          >
            LOGIN
          </button>
          
          <Link to='/signup'><button className='w-full bg-cyan-500 text-white p-2 rounded hover:bg-blue-600'>SIGN UP</button></ Link >
          {loginStatus === 'failed' && (
            <p className='text-red-500 mt-2'>Incorrect username or password</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;



