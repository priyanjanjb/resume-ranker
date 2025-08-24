import '../../assets/styleSheet/Style.css'
import { useState } from "react";
import toast from 'react-hot-toast';
import {useNavigate } from "react-router-dom";
import axios from 'axios';

function SignUpPage() {
  const navigate = useNavigate();
  const [signinFormData, setSigninFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    password: '',
    cPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSigninFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { fName, lName, email, password, cPassword } = signinFormData;

    if (password !== cPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post('/register', {
      fName,
      lName,
      email,
      password,
      });

      console.log("Sign in Response:", response);


      toast.success("Signup Successful, Welcome!");
      navigate('/');

    }catch (error: any) {
      const errorMessage =
      error?.response?.data?.message || // custom message from backend
      error?.response?.data?.error ||   // fallback option
      "Something went wrong. Please try again."; // default

      console.error("Login Error:", error);
      toast.error(errorMessage);
    }

    
  }

  return (
    <div className='backPanel'>
      <div className="LRPanel">
        <div className='leftPanelSGup'>
          <p className='tagline'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio sit
          </p>
        </div>

        <div className='rightPanel'>
          <h1 className="greetingSignUp">Shape Your Career in Minutes</h1>

          <div className="formTextSection">
            <p className='actionTopic'>Create your new account</p>

            <form className="signinFormData" onSubmit={handleSubmit}>
              <input
                className='inputBox'
                type="text"
                id='fName'
                name="fName"
                placeholder='First Name'
                value={signinFormData.fName}
                onChange={handleInputChange}
                
                required
              />
              <input
                className='inputBox'
                type="text"
                id='lName'
                name="lName"
                placeholder='Last Name'
                value={signinFormData.lName}
                onChange={handleInputChange}
                required
              />
              <input
                className='inputBox'
                type="email"
                id='email'
                name="email"
                placeholder='Email'
                value={signinFormData.email}
                onChange={handleInputChange}
                required
              />
              <input
                className='inputBox'
                type="password"
                id='password'
                name="password"
                placeholder='Password'
                value={signinFormData.password}
                onChange={handleInputChange}
                required
              />
              <input
                className='inputBox'
                type="password"
                id='cPassword'
                name="cPassword"
                placeholder='Confirm Password'
                value={signinFormData.cPassword}
                onChange={handleInputChange}
                required
              />

              <div className="buttonScection">
                <button className='buttons' type='submit'>Sign Up</button>
                <button
                  className='buttons'
                  type='button'
                  onClick={() => setSigninFormData({
                    fName: '',
                    lName: '',
                    email: '',
                    password: '',
                    cPassword: '',
                  })}
                >
                  Reset
                </button>
              </div>
            </form>

            <p className="para">
              Already have an account?
              <a className="linkssg" href="/signin"> Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
