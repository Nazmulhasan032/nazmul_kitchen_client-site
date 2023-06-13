import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Signup = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] =useState('');
    
const { emailUser } = useContext(AuthContext);

    

    const handleSignUp= (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password,confirm);

        setError('');
        setSuccess('');
        if (password.length < 6) {
            setSuccess('');
            setError("Password should be at least 6 characters long");
            return
            
          }
        
          if (password !== confirm) {
            setSuccess('');
            setError("Passwords do not match");
            return
            
          }

        emailUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            setError('');
            setSuccess("You have successfully registered");
            toast("You have successfully registered");

        })
        .catch(error =>{
            setError(error.massage);
            
        })
    
        

    }


    return (

        <div className='w-25 mx-auto mb-5'>
            <h2 className='text-center my-4'>Please Register</h2>

            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' id='name' placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' id='photo' placeholder="Enter Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' id='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' id='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirm' id='confirm' placeholder="Confirm Password" required />
                </Form.Group>
                <div>   
                    <p><small>Already have an Account? <Link to='/login'>Login</Link> </small></p>
                </div>

                <div className='text-center'>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </div> 
            </Form>
            
            <p className='text-success'>{success}</p>
            <p className='text-danger'>{error}</p>
        </div>
    );
};

export default Signup;