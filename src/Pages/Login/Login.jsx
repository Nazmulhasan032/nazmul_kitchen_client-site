import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub, FaUserCircle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { Nav } from 'react-bootstrap';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();


const Login = () => {
    const { login, user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })

    }

    const handleGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser)
            })
            .then(error => {
                console.log(error)
            })
    }
    const handleGit = () => {
        signInWithPopup(auth, gitProvider)
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser)
            })
            .then(error => {
                console.log(error)
            })
    }




    return (

        <div className='w-25 mx-auto mb-5'>
            <h2 className='text-center my-4'>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <div>
                    <p><small>New to Nazmul kitchen? <Link to='/signUp'>Sign Up</Link> </small></p>
                </div>

                

                <div className='text-center'>
                    <Button variant="primary" type="submit">Login</Button>
                </div>

                <p className='text-center my-4'>Or</p>
                <Button onClick={handleGoogle} className='w-100 mb-2' variant="outline-secondary"><FaGoogle /> Login with Google</Button>
                <br />
                <Button onClick={handleGit} className='w-100 mb-5' variant="outline-secondary"><FaGithub /> Login with Github</Button>

            </Form>

        </div>
    );
};

export default Login;