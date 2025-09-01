import '../../assets/styleSheet/home.css'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import axios from 'axios';


function HomePage() {
    

    const navigate = useNavigate();
    const userContext = useContext(UserContext);

    //safety check
    if (!userContext) {
      throw new Error("HomePage must be used within a UserContextProvider");
    }

    const { logout } = userContext;
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [dashBoardForm , setDashBoardForm] = useState({
      fullName: '',
      email : '',
      phone : '',
    })

    const uploadedFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const allowedFileTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (allowedFileTypes.includes(file.type)) {
        toast.success("File uploaded successfully");
        setUploadedFile(file);
       
      } else {
        toast.error("Please upload a .docx or .pdf file");
        setUploadedFile(null);
      }
    }
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const {fullName,email,phone } = dashBoardForm
    if (!uploadedFile) {
      toast.error("Please upload your CV");
      return;
    }
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('cvFile', uploadedFile); // 'cvFile' is the field name expected by backend
    
    try{
      const response = await axios.post('/dataRead',formData,{
        headers : {
          'Content-Type': 'multipart/form-data',
        },
        
      });
      toast.success("Form submitted")

      navigate('/dashBoard',{ state: { pdfText: response.data.content } });
      console.log(response.data); // For debug
    }catch(e){
      toast.error("file not handle")
    }


    // Submit logic here, e.g. form data sending
    
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
                value={dashBoardForm.fullName}
                onChange={(e) => 
                  setDashBoardForm({...dashBoardForm, fullName: e.target.value})}
                required
              />
              <input
                className="inputBox"
                type="email"
                placeholder="Email"
                value={dashBoardForm.email}
                onChange={(e) => 
                  setDashBoardForm({...dashBoardForm, email: e.target.value})}
                required
              />
              <input
                className="inputBox"
                type="tel"
                placeholder="Phone Number"
                value={dashBoardForm.phone}
                onChange={(e) => 
                  setDashBoardForm({...dashBoardForm, phone: e.target.value})}
                required
              />
              <input
                className="inputBox"
                type="file"
                accept=".pdf,.docx"
                onChange={uploadedFileHandler}
                required
              />

              <div className="buttonScection">
                <button className="buttons" type="submit">Submit</button>
                <button className="buttons" type="reset"
                onClick={()=>setDashBoardForm({ 
                  fullName: '',
                  email : '',
                  phone : '', 
                })}
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
