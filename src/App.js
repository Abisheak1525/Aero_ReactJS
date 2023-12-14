import {BrowserRouter,Routes,Route,Router, yLink} from "react-router-dom";
import LoginPage from "./Day5/LoginPage";
import SignUp from "./Day5/SignUp";
export default function app()
{
  
  return(
    <div>
      <BrowserRouter>
      <ul>
        <li>
          <Link to ="/login">Login Page</Link>
        </li>
        <li>
          <Link to ="/signup">Signup</Link>
        </li> 
      </ul>
      <Routes>
        <Route path="/login" element=<LoginPage/> ></Route>
        <Route path="/signup" element=<SignUp/> ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
 