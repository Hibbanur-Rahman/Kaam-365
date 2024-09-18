import { Routes, Route } from "react-router-dom";
import SignIn from "./views/signin";
import SignUp from "./views/signup";
import SignUpForm from "./views/signupForm";
import VerifyCode from "./views/verifyCode";
import ForgotPassword from "./views/forgotPassword";
import ChangePassword from "./views/changePassword";
import DashboardLayout from "./views/dashboard/dashboardLayout";
import CompleteProfile from "./views/completeProfile";
import TermsAndCondition from "./views/termsAndCondition";
import PrivacyPolicy from "./views/privacyPolicy";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signupForm" element={<SignUpForm />} />
        <Route path="/verifyCode" element={<VerifyCode />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/terms-and-condition" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
