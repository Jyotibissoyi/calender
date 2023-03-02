import React, { useState } from "react";
import { Card, Button, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();
  const [Data, UseData] = useState({ name: "", phone: "", email: "", password: "" });
  console.log(UseData);

  const ChangeHandler = (e) => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    UseData({ ...Data, [name]: value })

  }

  const DataBase = async (e)=>{
    e.preventDefault()
    try{const user = await axios.post('/register',Data)
     if(user.status === false)
     {
        window.alert("invalid data")
     }
     else{  window.alert("register successfully")
    navigate('/LogIn')}}
    catch(err){
       window.alert("please enter valid data")
    }
  }

  return (
    <>

      <div className="container">
        <h2 className="text-center mt-1">Register Your Details</h2>
        <Card className="shadow mt-3 p-3">

          <Form>
            <Row>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={Data.name} onChange={ChangeHandler} placeholder="Enter Full Name" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" name="phone" value={Data.phone} onChange={ChangeHandler} placeholder="Enter Phone No." />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" value={Data.email} onChange={ChangeHandler} placeholder="Enter Email" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={Data.password} onChange={ChangeHandler} placeholder="Enter Password here" />
              </Form.Group>
              <Button variant="primary" type="submi" onClick={DataBase}>Submit</Button>

              <p className="text-center text-muted mt-2 mb-0">Have already an account?{" "}
                <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link>
              </p>
            </Row>
          </Form>
        </Card>
      </div>

    </>
  );
};

export default SignUp;