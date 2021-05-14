import React, { useState } from 'react'
import styled from "styled-components";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


function Login({title, login}) {
    const [name, setName] = useState();
    const [password, setPassword] = useState();

const onNameChange = (e) => {
setName(e.target.value);
}
const onPassChange = (e) => {
    setPassword(e.target.value);
    }

const onSubmit = (values) => {
values.preventDefault();
if (!name ) return ;
if (!password) return;
login()
 }

    return (
        <Wrapper>
        <>
         <Form onSubmit = {onSubmit } >
        <h3 className="h4 text-center mb-4">{title}</h3>
        <p className= "text-center">Please sign-in to see beneficiary details.</p>
       <div className= "form-group">
        <input type="text"   className="form-control" placeholder="Username"  name= "username" onChange = {onNameChange} />
       
        </div>

        <div className= "form-group">
        <input type="password"   className="form-control"  placeholder="Password" name= "password" onChange = {onPassChange} />
        </div>

        <div className=" mt-4 wrap">
        <Button className="mr-1" type="submit" variant = "primary">Submit</Button>
        </div>
        
        </Form>
       </>
        </Wrapper>
    )
}

export default Login;

const Wrapper = styled.div `

.wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
Button {
    width: 200px;
  height: 45px;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #c0fefc;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  
}
Button:hover {
  background-color: #2EE59D;
  box-shadow: 0px 10px 15px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-4px);
}
   
`