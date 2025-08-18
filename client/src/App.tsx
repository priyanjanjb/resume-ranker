import { Route, Routes} from "react-router-dom";
import SignIn from "./components/signIn/signIn";
import SignUp from "./components/signUp/signUpPage";




function App(){
  return(
    <div>
      <Routes>
      <Route path='/' element={<SignIn />}/>
      <Route path='/signup' element={<SignUp />}/>
    </Routes> 
    </div>
    
  );
}

export default App;