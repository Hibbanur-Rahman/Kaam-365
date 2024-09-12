import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { TfiShareAlt } from "react-icons/tfi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import profileImg from "../../assets/images/profile-img.png";
import PDFObject from "pdfobject";
import resumePdf from "../../assets/images/resume-pdf.pdf";
import { HiXMark } from "react-icons/hi2";
import { TbDownload } from "react-icons/tb";
import { BiSolidFilePdf } from "react-icons/bi";
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

const ApplicationStatus = () => {
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
      cell: (row) => <p className="text-base font-medium">{row.status}</p>,
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
      status: "Pending",
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
      status: "Rejected",
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
      status: "Schedule Interview",
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
      status: "Rejected",
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
      status: "Accepted",
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
      status: "Schedule Interview",
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
      status: "Pending",
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
      status: "Rejected",
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
      <div className="flex items-center gap-[10px]  mt-8">
        <h1 className="text-3xl font-semibold text-[#2A397E]">
          Application Status
        </h1>
        <button className="bg-[#10A37F] text-white text-base flex items-center justify-center py-1 px-8 rounded-lg h-min">
          All Vacancies
        </button>
        <button className="bg-[#96FF85] text-black text-base flex items-center justify-center py-1 px-8 rounded-lg h-min">
          Completed
        </button>
        <button className="bg-[#DEE0E8] text-black text-base flex items-center justify-center py-1 px-8 rounded-lg h-min">
          In Progress
        </button>
        <button className="bg-[#10A37F] gap-[10px]  text-white text-base flex items-center justify-center py-1 px-8 rounded-2xl h-min">
          <TfiShareAlt />
          Import
        </button>
      </div>
      <div className="flex gap-[20px] w-full mt-8">
        <div className="w-full">
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
        {/* * ========== calendar section ===========
        <div className="w-5/12 flex justify-center px-4 ">
          <div className="flex flex-col bg-white h-max w-full px-3 pt-4 pb-4">
            <Calendar />
          </div>
        </div> */}
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
      <Dialog
        open={profileOpen}
        handler={handleProfileDialog}
        className="rounded-xl font-poppins overflow-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <DialogBody className="font-poppins overflow-scroll h-[90vh]" style={{scrollbarWidth:'none'}}>
          <div className="w-full p-2 py-4 rounded-2xl shadow-lg border">
            <div className="w-full flex justify-between px-4 py-2">
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
              <p className="text-base font-medium text-[#2A3980]">
                Education
              </p>
              <p className="mt-2 text-sm font-medium text-[#3A3A3A]">MCU University</p>
            </div>
            <div className="w-8/12">
              <p className="text-base font-medium text-[#2A3980]">
                Gender
              </p>
              <p className="mt-2 text-sm font-medium text-[#3A3A3A]">Male</p>
            </div>
          </div>
          <div className="flex flex-col w-full mt-4">
            <p className="text-base font-medium text-[#2A3980]">
              Email Id
            </p>
            <p className="mt-1 text-sm font-medium text-[#3A3A3A]">tim.jennings@example.com</p>

          </div>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default ApplicationStatus;
