import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import axios from 'axios';
import swal from 'sweetalert';


import { Link } from 'react-router-dom';
function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    
    const regexPassword = /^(?=.*[A-Z])(?=.*[@$!%*#?&])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    const regexEmail = /^[A-ZA-z0-9._-]+@(hotmail|gmail|yahoo|outlook).com$/;
    const navigate = useNavigate();
    const register = (e) => {
        e.preventDefault();
        let params = new URLSearchParams();
    
        if (!regexEmail.test(email)) {
            setEmailError(() => true);
        }
        if (!regexPassword.test(password)) {
            setPasswordError(() => true);
        }
        if (name !== '' && (emailError || passwordError === false)) {
            setEmailError('');
            setPasswordError('');
            params.append('name',name);
            params.append('email',email);
            params.append('password',password);
            const obj = {
                name: name,
                email: email,
                password: password
            }
            localStorage.setItem('current-user', JSON.stringify(obj));
            axios.post('http://localhost/ajirny-full/php/register.php', params)
                .then(res => console.log(res.data))
                .catch(error => {
                    console.log(error)
                });
                swal({
                    title: "Registered Successfully!",
                    text: "Welcome!",
                    icon: "success",
                    button:"ok"
                  });
                
            navigate('/');
            window.location.reload(true);

        }
        
    }
    return (
        <div className='registration'>
            <div className="registration__container">
                <h1 className='registration__title'>Sign up</h1>
                <form className='registration__form' onSubmit={register}>
                    <div className="registration__form--field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div className="registration__form--field">
                    <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} value={email} /> <br />
                    </div>
                    {emailError && <p className='registration__form--error par'>Wrong Email Format</p>}
                    <div className="registration__form--field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={(e) => setPassword(e.target.value)} value={password} /> <br />
                    </div>
                    {passwordError && <p className='registration__form--error par'>Should be 8 characters</p>}
                    <button type='submit' className='registration__formBtn'>Sign up</button>
                </form>
                <Link to='/login'>Already have an Account</Link>
            </div>
        </div>
    )
}

export default Registration
