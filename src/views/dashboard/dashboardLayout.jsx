import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Dashboard from "./dashboard";
import Jobs from "./jobs";
import PostJobs from "./postJobs";
import ApplicationStatus from "./applicationStatus";
import CreateVacancy from "./createVacancy";
import TopBar from "../../components/topBar";
import { useSelector } from "react-redux";
import SearchCandidate from "./searchCandidate";
import SearchCandidateResult from "./searchCandidateResult";
import Message from "./message";

const DashboardLayout = () => {
  const openSidebar=useSelector((state)=>state.sidebar.openSidebar);
  return (
    <div className="w-full h-[100vh] overflow-hidden flex bg-[#F5F6FA]">
      <div className={`${openSidebar?'w-2/12':'w-auto'} transition-all duration-500`}>
        <Sidebar />
      </div>
      <div className={`flex flex-col py-3 px-6 ${openSidebar?'w-10/12':'w-full'}`}>
        <TopBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/post-jobs" element={<PostJobs />} />
          <Route path="/application-status" element={<ApplicationStatus />} />
          <Route path='/create-vacancy' element={<CreateVacancy/>}/>
          <Route path='/search-candidate' element={<SearchCandidate/>}/>
          <Route path='/search-candidate-result' element={<SearchCandidateResult/>}/>
          <Route path='/message' element={<Message/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
