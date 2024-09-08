import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Dashboard from "./dashboard";
import Jobs from "./jobs";
import PostJobs from "./postJobs";
import ApplicationStatus from "./applicationStatus";
import TopBar from "../../components/topBar";

const DashboardLayout = () => {
  return (
    <div className="w-full h-[100vh] overflow-hidden flex">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="flex flex-col py-3 px-6 w-10/12">
        <TopBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/post-jobs" element={<PostJobs />} />
          <Route path="/application-status" element={<ApplicationStatus />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
