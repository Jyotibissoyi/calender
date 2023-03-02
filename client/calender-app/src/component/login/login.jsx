import React, { useEffect, useState } from "react";
import { Card, Button, Form, Row } from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const LogIn = () => {
  const [inputdata, setInputData] = useState({
    email: "",
    password: "",
  });

  const [showspin, setShowSpin] = useState(true);
  const navigate = useNavigate();
  // setInput Value
  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value });
  };

  //submit userdata
  const submitUserData = async (e) => {
    e.preventDefault();
    const { email, password } = inputdata;

    if (email === "") { toast.error("Email is Required !"); }
    else if (password === "") { toast.error("Password is Required !"); }
    else {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);
    }
  };
   const logIn = async (e)=>{
    e.preventDefault()
    try{let data = await axios.post('/login',{...inputdata})
    localStorage.setItem("token", data.data.userId.token);
    localStorage.setItem("userId", data.data.userId.userId);
    window.alert("succesfully logIn")
    navigate('/')
}
    catch(err)
    {
        window.alert("Please enter valid credetials")
    }
   }
  useEffect(() => {
    setTimeout(() => {
      setShowSpin(false);
    }, 1);
  }, []);

  return (
    <>
      {showspin ? (
       <div> loading</div>
      ) : (
        <div className="container">
          <h2 className="text-center mt-1">Login Here</h2>
          <Card className="shadow mt-3 p-3">
            <Form>
              <Row>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={inputdata.email}
                    onChange={setInputValue}
                    placeholder="Enter Email"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={inputdata.password}
                    onChange={setInputValue}
                    placeholder="Enter Password here"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={logIn}
                >
                  Submit
                </Button>
              </Row>
            </Form>
          </Card>
          <ToastContainer position="top-center" />
          <p className="text-center text-muted mt-3 mb-0">
            Don't have an account?{" "}
            <Link to="/SignUp" className="fw-bold text-body">
              <u>Register</u>
            </Link>
          </p>
        </div>
      )}
    </>
  );
};

export default LogIn;