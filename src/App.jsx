import { Routes,Route } from "react-router-dom";
import SignIn from "./views/signin";
import SignUp from "./views/signup";
import SignUpForm from "./views/signupForm";
import VerifyCode from "./views/verifyCode";
import ForgotPassword from "./views/forgotPassword";

const App=()=> {

  return (
    <div className="w-full">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupForm" element={<SignUpForm />} />
          <Route path="/verifyCode" element={<VerifyCode />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

        </Routes>
    </div>
  )
}

export default App;
