import { Routes,Route } from "react-router-dom";
import SignIn from "./views/signin";
import SignUp from "./views/signup";
import SignUpForm from "./views/signupForm";

const App=()=> {

  return (
    <div className="w-full">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupForm" element={<SignUpForm />} />
        </Routes>
    </div>
  )
}

export default App;
