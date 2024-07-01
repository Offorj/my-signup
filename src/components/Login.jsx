import React,  { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
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

const getuserArr = localStorage.getItem("useryoutube")
console.log(getuserArr)

        const { email, password } = inpval;
        if (email === "") {
          alert("Please Enter Email");
        } else if (!email.includes("@")) {
          alert("Please Enter a Valid Email");
        } else if (password === "") {
          alert("Please Enter Password");
        } else if (password.length < 5) {
          alert("password length greater than 5");
        }else{
           
    if(getuserArr && getuserArr.length){
        const userdata = JSON.parse(getuserArr)
       const userlogin = userdata.filter((el,k)=>{
        return el.email === email && el.password ===  password
       });

       if(userlogin.length === 0){
        alert("invalid details")
       }else{
        console.log("user login successfully")

localStorage.setItem("user_login",JSON.stringify(getuserArr))

        history("/Home")


        
       }
    }
          
    
        }
      };


  return (
    <>
    <div className="container mt-3">
        <section>
            <div className="left_data mt-3">
                <h3 className='text-center'>Sign In</h3>
                <Form className='d-flex justify-content-center align-items-center flex-column'>

               
                    <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" className="col-lg-4" onClick={(e) => addData(e)}>
                Submit
              </Button>
                </Form>
    
            </div>
           
        </section>
    </div>
    </>
  )
}

export default Login