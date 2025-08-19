import { Route, Routes} from "react-router-dom";
import SignIn from "./components/signIn/signIn";
import SignUp from "./components/signUp/signUpPage";
import HomePage from "./components/home/homePage";
import Dashboard from "./components/dashboard/dashboard";



function App(){
  return(
    <div>
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