import { Route, Routes} from "react-router-dom";
import SignIn from "./components/signIn/signIn";




function App(){
  return(
    <div>
      <Routes>
      <Route path='/' element={<SignIn />}/>
    </Routes> 
    </div>
    
  );
}

export default App;