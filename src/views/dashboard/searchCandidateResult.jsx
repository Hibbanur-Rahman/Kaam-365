import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "react-data-table-component";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { TfiShareAlt } from "react-icons/tfi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { BsChatLeftText } from "react-icons/bs";
import profileImg from "../../assets/images/profile-img.png";
import PDFObject from "pdfobject";
import resumePdf from "../../assets/images/resume-pdf.pdf";
import { HiXMark } from "react-icons/hi2";
import { TbDownload } from "react-icons/tb";
import { BiSolidFilePdf } from "react-icons/bi";
import { RiVideoOnLine } from "react-icons/ri";
import { HiOutlineXMark } from "react-icons/hi2";
import Calendar from "../../components/calendar";

// Custom styles for the DataTable
const customStyles = {
  tableWrapper: {
    style: {
      borderRadius: "20px",
      overflow: "hidden",
    },
  },
  header: {
    style: {
      backgroundColor: "#2A397E",
      color: "#FFF",
      fontSize: "18px",
      fontWeight: "bold",
      paddingLeft: "10px",
      borderRadius: "12px 12px 0 0", // Rounded top corners for the header
    },
  },
  rows: {
    style: {
      minHeight: "60px",
      margin: "4px 0",
      border: "none !important",
    },
  },
  cells: {
    style: {
      paddingLeft: "10px",
      paddingRight: "10px",
      fontSize: "14px",
    },
  },
  pagination: {
    style: {
      borderTop: "1px solid #e2e8f0",
      backgroundColor: "#F1F5F9",
      padding: "10px",
      borderRadius: "0 0 12px 12px", // Rounded bottom corners for pagination
    },
    pageButtonsStyle: {
      color: "#10A37F",
      "&:hover": {
        backgroundColor: "#10A37F",
        color: "#FFF",
      },
    },
  },
};

const SearchCandidateResult = () => {
  const dispatch = useDispatch();
  const openSidebar = useSelector((state) => state.sidebar.openSidebar);
  const [selectedRows, setSelectedRows] = useState(false);
  const [toggledClearRows, setToggleClearRows] = useState(false);
  const [jobStatus, setJobStatus] = useState({}); // Managing toggle button state for each job by id
  const [resumeUrl, setResumeUrl] = useState(""); // State to hold the URL of the resume
  const [open, setOpen] = useState(false); // State for handling the dialog
  const [profileOpen, setProfileOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
    { value: "accepted", label: "Accepted" },
    { value: "rejected", label: "Rejected" },
    { value: "interview", label: "Schedule Interview" },
  ];
  const handleOpen = (resume) => {
    setResumeUrl(resume); // Set the resume URL when opening the dialog
    setOpen(!open);
  };

  const handleChange = ({ selectedRows }) => {
    setSelectedRows(selectedRows);
  };

  const handleProfileDialog = () => {
    setProfileOpen(!profileOpen);
  };

  useEffect(() => {
    if (open && resumeUrl) {
      PDFObject.embed(resumeUrl, "#pdf-viewer");
    }
  }, [open, resumeUrl]);

  const columns = [
    {
      name: "Profile",
      selector: (row) => row.applicantName,
      cell: (row) => (
        <div
          className="flex items-center gap-[10px] cursor-pointer"
          onClick={handleProfileDialog}
        >
          <div className="flex h-[30px] w-[30px] rounded-full overflow-hidden bg-[#FFDDDD]">
            <img src={profileImg} alt="" className="rounded-full" />
          </div>
          <p className="text-base font-medium">{row.applicantName}</p>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => row.location,
      cell: (row) => (
        <div className="flex items-center gap-[5px]">
          <FaLocationDot className="text-lg text-yellow-500" />
          <p className="text-sm font-medium">{row.location}</p>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Job Title",
      selector: (row) => row.jobTitle,
      cell: (row) => <p className="text-base font-medium">{row.jobTitle}</p>,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => (
        <div className={`rounded-3xl px-4 py-2 w-[95px] flex justify-center items-center ${row.status==='Active'?'bg-[#EDF9F0] text-[#23A757]':'bg-[#FFDDDD] text-[#ED0000]'}`}>
          <p className="text-xs font-semibold">{row.status}</p>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Resume",
      cell: (row) => (
        <div className="flex gap-[10px]">
          <div
            className="h-min w-max rounded-3xl px-2 py-1 bg-[#F8F8F8] cursor-pointer"
            onClick={() => handleOpen(row.resume)}
          >
            <p className="text-sm text-[#4B5DB0] font-medium">View resume</p>
          </div>
          <div className="group h-min w-min bg-[rgba(175,184,228,0.47)] p-2 flex items-center justify-center rounded-full cursor-pointer">
            <BsFillChatLeftTextFill className="text-lg  text-[#2A397E]" />
          </div>
        </div>
      ),
      button: true,
    },
    {
      name: "Actions",
      cell: () => (
        <button className="text-gray-600">
          <BsThreeDotsVertical className="text-xl text-[#969DA6]" />
        </button>
      ),
      button: true,
    },
  ];

  const data = [
    {
      id: 1,
      applicantName: "Rajesh Kumar",
      location: "Pune",
      jobTitle: "Electrician",
      status: "Active",
      totalApplications: 45,
      newApplications: 5,
      date: "2023-08-02",
      resume: resumePdf,
    },
    {
      id: 2,
      applicantName: "Rohit Sharma",
      location: "Delhi",
      jobTitle: "Plumber",
      status: "Inactive",
      totalApplications: 60,
      newApplications: 1,
      date: "2023-08-05",
      resume: resumePdf,
    },
    {
      id: 3,
      applicantName: "Suresh Kumar",
      location: "Chennai",
      jobTitle: "Carpenter",
      status: "Inactive",
      totalApplications: 40,
      newApplications: 4,
      date: "2023-08-05",
      resume: resumePdf,
    },
    {
      id: 4,
      applicantName: "Deepak Singh",
      location: "Ludhiana",
      jobTitle: "Painter",
      status: "Active",
      totalApplications: 55,
      newApplications: 6,
      date: "2023-08-05",
      resume: resumePdf,
    },
    {
      id: 5,
      applicantName: "Rajesh Mehta",
      location: "Ludhiana",
      jobTitle: "Welder",
      status: "Inactive",
      totalApplications: 35,
      newApplications: 10,
      date: "2023-08-05",
      resume: resumePdf,
    },
    {
      id: 6,
      applicantName: "Vikram Reddy",
      location: "Mumbai",
      jobTitle: "Electrician",
      status: "Inactive",
      totalApplications: 45,
      newApplications: 14,
      date: "2023-08-05",
      resume: resumePdf,
    },
    {
      id: 7,
      applicantName: "Manish Gupta",
      location: "Chennai",
      jobTitle: "Plumber",
      status: "Active",
      totalApplications: 40,
      newApplications: 4,
      date: "2023-08-05",
      resume: resumePdf,
    },
    {
      id: 8,
      applicantName: "Sanjay Joshi",
      location: "Ludhiana",
      jobTitle: "Electrician",
      status: "Inactive",
      totalApplications: 55,
      newApplications: 6,
      date: "2023-08-05",
      resume: resumePdf,
    },
    // Add more jobs as necessary
  ];

  return (
    <div
      className="w-full flex flex-col h-[100vh] overflow-y-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="w-full flex items-center gap-[10px]  mt-8 justify-between">
        <h1 className="text-3xl font-semibold text-[#2A397E]">
          Candidate Search
        </h1>
        <div className="flex gap-[10px]">
          <button className="bg-[#10A37F] text-white text-base flex items-center justify-center py-1 px-8 rounded-lg h-min">
            All
          </button>
          <button className=" bg-[#cde1cda6] text-[#23A757] text-base flex items-center justify-center py-1 px-8 rounded-lg h-min">
            Active
          </button>
          <button className="bg-[#FFDDDD] text-[#ED0000] text-base flex items-center justify-center py-1 px-8 rounded-lg h-min">
            Inactive
          </button>
          <button className="bg-[#10A37F] gap-[10px]  text-white text-base flex items-center justify-center py-1 px-8 rounded-2xl h-min">
            <TfiShareAlt />
            Import
          </button>
        </div>
      </div>
      <div className="flex gap-[20px] w-full mt-8">
        <div className={`${openSidebar ? "w-full" : "w-8/12"}`}>
          <DataTable
            title=""
            columns={columns}
            data={data}
            selectableRows
            onSelectedRowsChange={handleChange}
            clearSelectedRows={toggledClearRows}
            customStyles={customStyles}
          />
        </div>
        {/* * ========== calendar section ===========*/}
        {!openSidebar && (
          <div className="w-4/12 flex justify-center px-4 ">
            <div className="flex flex-col bg-white rounded-xl h-max w-full px-3 pt-4 pb-4">
              {profileOpen ? <Profile /> : <Calendar />}
            </div>
          </div>
        )}
      </div>

      {/* Dialog to show the resume */}
      <Dialog open={open} handler={handleOpen}>
        <div className="w-full flex justify-end p-4">
          <HiXMark className="text-3xl cursor-pointer" onClick={handleOpen} />
        </div>

        {resumeUrl ? (
          <div id="pdf-viewer" className="w-full h-[500px]" />
        ) : (
          <p>No resume available</p>
        )}
      </Dialog>

      {/**Dialog for show profile */}
      {openSidebar ? (
        <Dialog
          open={profileOpen}
          handler={handleProfileDialog}
          className="rounded-xl font-poppins overflow-scroll"
          style={{ scrollbarWidth: "none" }}
        >
          <DialogBody
            className="font-poppins overflow-scroll h-[90vh]"
            style={{ scrollbarWidth: "none" }}
          >
            <Profile />
          </DialogBody>
        </Dialog>
      ) : (
        ""
      )}
    </div>
  );
};

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [interviewDate, setInterviewDate] = useState("2022-01-17"); // default date
  const [interviewTime, setInterviewTime] = useState("10:00"); // default time
  const [success, setSuccess] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
    {
      value: "accepted",
      label: "Accepted",
      message: `Congratulations!
After we reviewed your application for the position of Factory worker, we congratulate you for being a part of us. After this you will be contacted personally by our team. Thank You...
Greetings,
Hiring Manager
`,
    },
    {
      value: "rejected",
      label: "Rejected",
      message: `We are sorry,
After we have had an in-depth discussion about your application, we would like to convey that your profile is not suitable and you cannot become part of us. Good luck with your other applications.
Greetings,
Hiring Manager`,
    },
    {
      value: "interview",
      label: "Schedule Interview",
      message: `Congratulations!
After reviewing various internal discussions regarding this job ad, we would like to invite you for an interview on Monday, Jan 17,2022 at 10.00 am.
Greetings,
Hiring Manager`,
      time: "17-02-2004",
      date: "10:00 AM",
    },
  ];

  // Update the interview message whenever the date or time changes
  useEffect(() => {
    if (selectedOption && selectedOption.value === "interview") {
      const updatedMessage = `Congratulations!
After reviewing various internal discussions regarding this job ad, we would like to invite you for an interview on Monday, ${new Date(
        interviewDate
      ).toLocaleDateString()} at ${interviewTime}.
Greetings,
Hiring Manager`;
      setSelectedOption((prev) => ({
        ...prev,
        message: updatedMessage,
      }));
    }
  }, [interviewDate, interviewTime]);

  const handleSubmitSendMessage = (e) => {
    // Send the selected message to the server
    // For demonstration purposes, we'll just log it to the console
    e.preventDefault();
    console.log(selectedOption.message);
    setSuccess(!success);
  };
  const handleSuccessModal = () => setSuccess(!success);
  return (
    <div className="font-poppins w-full flex justify-center">
      {selectedOption ? (
        <div className="w-11/12 flex flex-col font-poppins">
          <div className="w-full border rounded-lg px-4 py-4">
            <div className="w-full flex border-b pb-3 mb-4 justify-between">
              <div className="flex gap-[10px] items-center">
                <img
                  src={profileImg}
                  alt=""
                  className="rounded-full h-[50px] w-[50px]"
                />
                <div className="">
                  <h1 className="text-base font-medium text-[#000]">
                    Rajesh Kumar
                  </h1>
                  <p className="text-[#ACACAC] text-[0.82rem] font-regular">
                    Construction worker
                  </p>
                </div>
              </div>
              <div className="flex gap-[5px] items-center">
                <div className="group h-min w-min bg-[#F0F3FF] p-2 flex items-center justify-center rounded-lg cursor-pointer">
                  <BsChatLeftText className="text-lg  text-[#2A397E]" />
                </div>
                <div className="group h-min w-min bg-[#F0F3FF] p-2 flex items-center justify-center rounded-lg cursor-pointer">
                  <RiVideoOnLine className="text-lg  text-[#2A397E]" />
                </div>
              </div>
            </div>
            <button className="w-full my-2 py-2 text-white rounded-3xl bg-[#4B5DB0]">
              See resume
            </button>
            <div className="relative w-full ">
              <button
                onClick={toggleDropdown}
                className={`w-full relative bg-white border-2 ${
                  selectedOption.value === "accepted"
                    ? "border-[#23A757] text-[#23A757]"
                    : "border-[#2A3980] text-[#2A3980]"
                } ${
                  selectedOption.value === "rejected"
                    ? "border-[#DA1414] text-[#DA1414]"
                    : ""
                } ${
                  selectedOption.value === "interview"
                    ? "border-[#2A3980] text-[#2A3980]"
                    : ""
                }  font-medium text-sm  rounded-full px-4 py-2 flex justify-between items-center focus:outline-none`}
              >
                <p className="w-full text-center">
                  {" "}
                  {selectedOption ? selectedOption.label : "Mark status as"}
                </p>
                <svg
                  className={`w-4 h-4 ${
                    selectedOption.value === "accepted"
                      ? "border-[#23A757] text-[#23A757]"
                      : "border-[#2A3980] text-[#2A3980]"
                  } ${
                    selectedOption.value === "rejected"
                      ? "border-[#DA1414] text-[#DA1414]"
                      : ""
                  } ${
                    selectedOption.value === "interview"
                      ? "border-[#2A3980] text-[#2A3980]"
                      : ""
                  } absolute right-[20px]`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {isOpen && (
                <ul className="absolute w-full mt-2 py-3 px-2 bg-white border rounded-lg shadow-lg z-10">
                  {options.map((option) => (
                    <li
                      key={option.value}
                      onClick={() => handleOptionClick(option)}
                      className={`px-4 py-2 text-center cursor-pointer ${
                        option.value === "accepted"
                          ? " bg-[#96FF85] text-black"
                          : ""
                      } ${
                        option.value === "rejected"
                          ? " bg-[rgba(237,0,0,0.7)] text-white"
                          : ""
                      } ${
                        option.value === "interview"
                          ? " bg-[rgba(75,93,176,0.4)] text-black"
                          : ""
                      } hover:bg-[#2A3980] hover:text-white text-sm rounded-lg`}
                      style={{
                        marginBottom: "8px", // Add custom margin
                        padding: "8px 12px", // Add custom padding
                      }}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>{" "}
            {selectedOption.value === "interview" && (
              <div className="flex w-full border-t-2 mt-4 justify-between gap-[15px] py-4">
                <input
                  type="date"
                  className="w-6/12 rounded-3xl border-2 border-[#4B5DB0] text-[#4B5DB0] py-1 px-4"
                  value={interviewDate}
                  onChange={(e) => setInterviewDate(e.target.value)}
                />
                <input
                  type="time"
                  className="w-6/12 rounded-3xl border-2 border-[#4B5DB0] text-[#4B5DB0] py-1 px-4"
                  value={interviewTime}
                  onChange={(e) => setInterviewTime(e.target.value)}
                />
              </div>
            )}
          </div>
          <form
            method="post"
            className="w-full mt-4"
            onSubmit={(e) => handleSubmitSendMessage(e)}
          >
            <p className="text-base text-[#3A3A3A]">
              Message<span className="text-[#DA1414] text-xl">*</span>
            </p>
            <textarea
              name=""
              id=""
              value={selectedOption.message}
              className="h-[180px] mt-3 resize-none border-2 border-[#B7B7B7] text-[#3A3A3A] text-sm rounded-xl w-full focus:outline-none py-4 px-2"
              style={{ scrollbarWidth: "none" }}
            ></textarea>
            <button
              className="w-full my-2 py-2 text-white rounded-3xl bg-[#10A37F]"
              onClick={(e) => handleSubmitSendMessage(e)}
            >
              Send to applications
            </button>
          </form>
          <Dialog
            open={success}
            handler={handleSuccessModal}
            className="md:max-w-[400px] md:min-w-[400px] lg:max-w-[400px] lg:min-w-[400px] 2xl:min-w-[400px] 2xl:max-w-[400px]  rounded-3xl bg-white flex flex-col items-center"
          >
            <div className="w-11/12 mt-3 flex justify-end">
              <div
                className="rounded-full border-2 border-[#000] h-min w-min p-1 cursor-pointer hover:bg-gray-100"
                onClick={handleSuccessModal}
              >
                <HiOutlineXMark className="text-xl text-black" />
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center h-full  mt-12 mb-16">
              <h3 className="text-center text-2xl text-[#2A3980] font-semibold">
                Successful!
              </h3>
              <p className="text-center text-black">
                Notification have been sent to applicants
              </p>
            </div>
          </Dialog>
        </div>
      ) : (
        <div className="w-full">
          <div className="w-full p-2 py-4 rounded-2xl shadow-lg border">
            <div className="w-full flex justify-between px-4 py-2 ">
              <div className="flex gap-[10px] items-center">
                <img
                  src={profileImg}
                  alt=""
                  className="rounded-full h-[50px] w-[50px]"
                />
                <div className="">
                  <h1 className="text-base font-medium text-[#000]">
                    Rajesh Kumar
                  </h1>
                  <p className="text-[#ACACAC] text-[0.82rem] font-regular">
                    Construction worker
                  </p>
                  <p className="text-[#4B5DB0] font-medium text-[0.82rem] cursor-pointer">
                    View resume
                  </p>
                </div>
              </div>
              <div className="flex gap-[5px] items-center">
                <div className="group h-min w-min bg-[rgba(175,184,228,0.47)] p-2 flex items-center justify-center rounded-full cursor-pointer">
                  <BsFillChatLeftTextFill className="text-lg  text-[#2A397E]" />
                </div>
                <p className="text-base">Message</p>
              </div>
            </div>

            <div className="flex w-full justify-end mt-4">
              <div className="relative w-full max-w-[200px]">
                <button
                  onClick={toggleDropdown}
                  className="w-full bg-white border-2 border-[#2A3980] text-[#2A3980] font-medium text-sm rounded-full px-4 py-2 flex justify-between items-center focus:outline-none"
                >
                  {selectedOption ? selectedOption.label : "Mark status as"}
                  <svg
                    className="w-4 h-4 text-[#2A3980]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {isOpen && (
                  <ul className="absolute w-full mt-2 py-3 px-2 bg-white border rounded-lg shadow-lg z-10">
                    {options.map((option) => (
                      <li
                        key={option.value}
                        onClick={() => handleOptionClick(option)}
                        className={`px-4 py-2 text-center cursor-pointer ${
                          option.value === "accepted"
                            ? " bg-[#96FF85] text-black"
                            : ""
                        } ${
                          option.value === "rejected"
                            ? " bg-[rgba(237,0,0,0.7)] text-white"
                            : ""
                        } ${
                          option.value === "interview"
                            ? " bg-[rgba(75,93,176,0.4)] text-black"
                            : ""
                        } hover:bg-[#2A3980] hover:text-white text-sm rounded-lg`}
                        style={{
                          marginBottom: "8px", // Add custom margin
                          padding: "8px 12px", // Add custom padding
                        }}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-8">
            <p className="text-base font-medium text-[#2A3980]">Aadhar card</p>
            <div className="w-full flex justify-between items-center bg-[#F8F8F8] rounded-lg shadow-sm p-3 my-3">
              <div className="flex gap-[10px]">
                <BiSolidFilePdf className="text-4xl text-[#F54444]" />
                <div className="">
                  <p className=" text-[#676767] text-sm">Aadharcard005.pdf</p>
                  <p className="text-[#676767] text-xs">440 kb</p>
                </div>
              </div>
              <TbDownload className="cursor-pointer text-3xl text-[#23A757]" />
            </div>
          </div>
          <div className="flex flex-col w-full mt-4">
            <p className="text-base font-medium text-[#2A3980]">
              Other documents
            </p>
            <div className="w-full flex justify-between items-center bg-[#F8F8F8] rounded-lg shadow-sm p-3 my-2">
              <div className="flex gap-[10px]">
                <BiSolidFilePdf className="text-4xl text-[#F54444]" />
                <div className="">
                  <p className=" text-[#676767] text-sm">Aadharcard005.pdf</p>
                  <p className="text-[#676767] text-xs">440 kb</p>
                </div>
              </div>
              <TbDownload className="cursor-pointer text-3xl text-[#23A757]" />
            </div>
            <div className="w-full flex justify-between items-center bg-[#F8F8F8] rounded-lg shadow-sm p-3 my-2">
              <div className="flex gap-[10px]">
                <BiSolidFilePdf className="text-4xl text-[#F54444]" />
                <div className="">
                  <p className=" text-[#676767] text-sm">Aadharcard005.pdf</p>
                  <p className="text-[#676767] text-xs">440 kb</p>
                </div>
              </div>
              <TbDownload className="cursor-pointer text-3xl text-[#23A757]" />
            </div>
            <div className="w-full flex justify-between items-center bg-[#F8F8F8] rounded-lg shadow-sm p-3 my-2">
              <div className="flex gap-[10px]">
                <BiSolidFilePdf className="text-4xl text-[#F54444]" />
                <div className="">
                  <p className=" text-[#676767] text-sm">Aadharcard005.pdf</p>
                  <p className="text-[#676767] text-xs">440 kb</p>
                </div>
              </div>
              <TbDownload className="cursor-pointer text-3xl text-[#23A757]" />
            </div>
          </div>
          <div className="flex flex-col w-full mt-4">
            <p className="text-base font-medium text-[#2A3980]">Skills</p>
            <div className="flex gap-[15px] w-full flex-wrap my-2">
              <div className="rounded-md bg-[rgba(151,151,151,0.16)] flex items-center justify-center px-6 py-1">
                <p className="text-center text-base font-medium text-[#3A3A3A]">
                  Technical Skills
                </p>
              </div>
              <div className="rounded-md bg-[rgba(151,151,151,0.16)] flex items-center justify-center px-6 py-1">
                <p className="text-center text-base font-medium text-[#3A3A3A]">
                  Mechanical Skills
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between mt-4">
            <div className="w-4/12">
              <p className="text-base font-medium text-[#2A3980]">Education</p>
              <p className="mt-2 text-sm font-medium text-[#3A3A3A]">
                MCU University
              </p>
            </div>
            <div className="w-8/12">
              <p className="text-base font-medium text-[#2A3980]">Gender</p>
              <p className="mt-2 text-sm font-medium text-[#3A3A3A]">Male</p>
            </div>
          </div>
          <div className="flex flex-col w-full mt-4">
            <p className="text-base font-medium text-[#2A3980]">Email Id</p>
            <p className="mt-1 text-sm font-medium text-[#3A3A3A]">
              tim.jennings@example.com
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchCandidateResult;
