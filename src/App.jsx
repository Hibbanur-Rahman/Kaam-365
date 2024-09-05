import { Routes,Route } from "react-router-dom";
import SignIn from "./views/signin";
import SignUp from "./views/signup";

const App=()=> {

  return (
    <div className="w-full">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    </div>
  )
}

export default App;
