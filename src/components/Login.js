import React from 'react'
import './login.css'
import logo from '../images/image.png';
import { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,

  Input,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { Object } from '../helpper/Object';
const Login = () => {
  // const navigate = useNavigate();
  const navigate1=useNavigate();
  const [user, SetUser] = useState(Object);
   
  const handlerChange = (key, value) => {
    SetUser({ ...user, [key]: value })
    console.log(user)
  }

  const [errors, setError] = useState({
    name: '',
    email: '',
    password: '',
  });
const validation=()=>{
   let error={}

   if(!user.name){
    error.name="Name is Required"
   }
   else if(user.name.length<5){
    error.name="Name must be more than 5 char"
   }
   if(!user.email){
    error.email="email is Required"
   }
    else  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)){
      error.email='invalid email'
    }
   else if(user.email.length<5){
    error.name="Name must be more than 5 char"
   }
   if(!user.password){
    error.password="password is Required"
   }
   else if(user.password.length<9){
    error.password="password must be more than 9 char"
   }
   return error;
}

  const getData = (e) => {

    e.preventDefault();
     setError(validation(user));

    const getuserArry = localStorage.getItem("localdata");
    console.log(getuserArry);
    
    const { name, email, password } = user;
    // if (!name === "" || !email === "" || !password === "") {
     
        if (getuserArry && getuserArry.length) {
          const userdata = JSON.parse(getuserArry);
        
          const userlogin = userdata.filter((el, k) => {
            return el.name === name && el.email === email && el.password === password
          });
          console.log(userlogin)
          if (userlogin.length === 0) {
            alert("invalid detail")
          }
          else {
            console.log("user login succesfuly")
            navigate1("/Sidebar")
          }
        }
      }   
   
    return (
      <>
        < div className="App">
              <img src={logo} className="images"/>
          <Form className="log-in" >
           
            <h2 className='heading'>Login</h2>
            <FormGroup>

              <Input className='INPUT-FIELD'
                type="name"
                name="name"
                id="exampleName"
                placeholder="name"
                value={user.name}
                onChange={(e) => handlerChange("name", e.target.value)}
                
              />
              {errors.name && <p style={{color:"white",fontSize:"20px"}}>{errors.name}</p>}
            </FormGroup>
            <FormGroup>

              <Input className='INPUT-FIELD'
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email"
                value={user.email}
                onChange={(e) => handlerChange("email", e.target.value)}
              />
               {errors.email && <p style={{color:"white",fontSize:"20px"}}>{errors.email}</p>}
            </FormGroup>
            <FormGroup>
              <Input className='INPUT-FIELD'
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password"
                value={user.password}
                onChange={(e) => handlerChange("password", e.target.value)}
              />
               {errors.password && <p style={{color:"white",fontSize:"20px"}}>{errors.password}</p>}
            </FormGroup>
            <Button className='buttonn' onClick={getData}>Submit</Button>
            <div className='notamember'>
              <h6>Not a Member?</h6>
              <button className='snuppp' onClick={() =>navigate1('Signup')}>Sign Up</button>
            </div>
          </Form>
        </div>

      </>
    )
  }
 export default Login

