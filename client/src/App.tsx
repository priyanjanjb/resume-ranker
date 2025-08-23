import { Route, Routes} from "react-router-dom";
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

import SignIn from "./components/signIn/signIn";
import SignUp from "./components/signUp/signUpPage";
import HomePage from "./components/home/homePage";
import Dashboard from "./components/dashboard/dashboard";


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;


function App(){
  return(
    <div>
    <Toaster />
    <Routes>
      <Route path='/' element={<SignIn />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/homePage' element={<HomePage />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
    </Routes> 
    </div>
    
  );
}

export default App;