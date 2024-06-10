import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './signup.css';
import { Object } from '../helpper/Object';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const localStorage1 = () => {
    const list = localStorage.getItem('localdata');
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };

  const notify = () => toast('Please enter all fields!');
  const navigate = useNavigate();
  const [user, setUser] = useState(Object);
  const [data, setData] = useState(localStorage1());
  const handleChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  const [errors, setErrors] = useState({});
  const validation = () => {
    let error = {};

    if (!user.name) {
      error.name = 'Name is required';
    } else if (user.name.length < 5) {
      error.name = 'Name must be more than 5 characters';
    }
    if (!user.email) {
      error.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      error.email = 'Invalid email';
    }
    if (!user.password) {
      error.password = 'Password is required';
    } else if (user.password.length < 9) {
      error.password = 'Password must be more than 9 characters';
    }
    return error;
  };

  const addData = (e) => {
    e.preventDefault();

    setErrors(validation(user));

    if (user.name === '' || user.email === '' || user.password === '') {
      notify();
    } else {
      setData([...data, user]);
      const obj = { ...user };
      let arry = [...data, obj];
      localStorage.setItem('localdata', JSON.stringify(arry));
      setUser({ name: '', email: '', password: '' });
      navigate('/sidebar');
    }
  };

  return (
    <div>
      <div className="signup-main">
        <Form className="signup-form">
          <h2 className="signup-head">Sign Up</h2>
          <FormGroup>
            <Input
              className="signup-input"
              type="text"
              name="name"
              id="exampleName"
              placeholder="Name"
              value={user.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
            {errors.name && <p className="signup-error">{errors.name}</p>}
          </FormGroup>
          <FormGroup>
            <Input
              className="signup-input"
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
              value={user.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
            {errors.email && <p className="signup-error">{errors.email}</p>}
          </FormGroup>
          <FormGroup>
            <Input
              className="signup-input"
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
              value={user.password}
              onChange={(e) => handleChange('password', e.target.value)}
            />
            {errors.password && <p className="signup-error">{errors.password}</p>}
          </FormGroup>
          <Button className="signup-button" onClick={addData}>
            Submit
          </Button>
          <ToastContainer />
        </Form>
      </div>
    </div>
  );
};

export default Signup;
