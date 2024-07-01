import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    password: "",
  });

const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval((prevVal) => ({
     ...prevVal,
      [name]: value,
    }));
  };

  const addData = (e) => {
    e.preventDefault();
    const { name, email, password } = inpval;
  
    if (name === "") {
      alert("Please Enter Name");
    } else if (email === "") {
      alert("Please Enter Email");
    } else if (!email.includes("@")) {
      alert("Please Enter a Valid Email");
    } else if (password === "") {
      alert("Please Enter Password");
    } else if (password.length < 5) {
      alert("password length greater than 5");
    }else{
        console.log("data added successfully")

        localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

    }
  };
  

  return (
  
    <>
    <div className="container mt-3">
        <section>
            <div className="left_data mt-3">
                <h3 className='text-center'>Sign Up</h3>
                <Form className='d-flex justify-content-center align-items-center flex-column'>

                <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' onChange={getdata}  placeholder="Enter Full Name" />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" className="col-lg-4" onClick={(e) => addData(e)}>
                Submit
              </Button>
                </Form>
                <p className='mt-3 text-center'>Already Have an Account <span><NavLink to='./login'> Sign In</NavLink></span></p>
            </div>
           
        </section>
    </div>
    </>
  )
}

export default Home