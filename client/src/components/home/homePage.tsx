import '../../assets/styleSheet/home.css'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
interface Props {}

function HomePage(props: Props) {
    const {} = props
    const navigate = useNavigate();

    const userContext = useContext(UserContext);
    //safety check
    if (!userContext) {
      throw new Error("HomePage must be used within a UserContextProvider");
    }
    const { logout } = userContext;

      const handleSubmit = () => {
          console.log("Form submitted");
          navigate('/dashboard'); // Navigate to the next page
      };

    const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logout Successful");
      navigate('/');
    } catch (error) {
      toast.error("Something went wrong");
    }
  };


    return (
        <div className="hmBackPanel">
      <div className="hmLRPanel">
        <div className="leftPanel">
          <p className="tagline">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio sit.
          </p>
        </div>

        <div className="rightPanel">
          <h1 className="greeting">
              Hi...
          </h1>


          <div className="formTextSection">
            <p className="actionTopic">Fill the Form</p>
            <form className="formData" onSubmit={handleSubmit}>
              <input
                className="inputBox"
                type="text"
                placeholder="Name"
                
                required
              />
              <input
                className="inputBox"
                type="email"
                placeholder="Email"
                
                required
              />
              <input
                className="inputBox"
                type="tel"
                placeholder="Phone Number"
               
                required
              />
              <input
                className="inputBox"
                type="file"
                accept=".pdf,.docx"
                
                required
              />

              <div className="buttonScection">
                <button className="buttons" type="submit">Submit</button>
                <button className="buttons" type="reset"

                >Reset</button>
                <button type="button" className="buttons" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default HomePage
