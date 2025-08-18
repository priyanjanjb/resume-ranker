import '../../assets/styleSheet/Style.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

interface Props {}

function SignInPage(props: Props) {
    const {} = props
    const navigate = useNavigate();
    const [loginFormData, setLoginFormData] = useState({
      email: '',
      password: ''
    });

    const handleInputChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name , value} = e.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
      }));
    }

  const handleSubmit =  async(e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault(); // Prevent page reload
    console.log("submit ok");
   navigate('/signup')

    
  }


    return (
      <div className="formBackPanel">
        <div className="LRPanel">
          <div className="leftPanelSGin">
            <p className="tagline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio sit
            </p>
          </div>

          <div className="rightPanel">
            <h1 className="greetingSignIn">Welcome back</h1>
            <div className="formTextSection">
              <p className="actionTopic">Login to your account</p>
              <form className="formData" onSubmit={handleSubmit}>
              <input
                className="inputBox"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={loginFormData.email}
                onChange={handleInputChange}
                required
              />

              <input
                className="inputBox"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={loginFormData.password}
                onChange={handleInputChange}
                required
              />

              <button className="buttons" type="submit">
                Login
              </button>
              </form>

              <p>
                <a className="linkslg" href="/signup">Create new Account</a>
              </p>
              <p>
                <a className="linkslg" href="#">Forgot password?</a>
              </p>
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default SignInPage
