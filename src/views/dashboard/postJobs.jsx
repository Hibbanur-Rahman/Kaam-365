import React, { useState } from "react";
import { TfiShareAlt } from "react-icons/tfi";
import { TiPlus } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";
import DataTable from "react-data-table-component";
import moment from "moment"; // For date formatting
import { Switch } from "@material-tailwind/react";
import { FaLocationDot } from "react-icons/fa6";
import tableJobIcon from '../../assets/images/table-job-role-img.svg'


// Custom styles for the DataTable
const customStyles = {
  tableWrapper: {
    style: {
      borderRadius: "20px",
      overflow:'hidden',
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
  headCells: {
    style: {
    },
  },
  rows: {
    style: {
      minHeight: "60px",
      // '&:nth-of-type(odd)': {
      //   backgroundColor: "#F9FAFB",
      // },
      margin: "4px 0", 
      border:'none !important'
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


const PostJobs = () => {
  const [selectedRows, setSelectedRows] = useState(false);
  const [toggledClearRows, setToggleClearRows] = useState(false);
  const [jobStatus, setJobStatus] = useState({}); // Managing toggle button state for each job by id

  const handleChange = ({ selectedRows }) => {
    setSelectedRows(selectedRows);
  };

  // Toggle the state so React Data Table changes to clearSelectedRows are triggered
  const handleClearRows = () => {
    setToggleClearRows(!toggledClearRows);
  };

  // Handling toggle for each row based on job id
  const handleToggleStatus = (id) => {
    setJobStatus((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the state based on the job id
    }));
  };

  const columns = [
    {
      name: "Job Title",
      selector: (row) => row.title,
      cell: (row) => (
        <div className="flex items-center gap-[10px]">
          <div className="flex h-max w-max rounded-lg bg-[#FFDDDD] p-2">
            <img src={tableJobIcon} alt="" className="h-[20px] w-[20px]" />
          </div>
          <p className="text-base font-medium">{row.title}</p>
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
      name: "Applications",
      selector:(row)=>row.totalApplications,
      cell: (row) => (
        <div className="flex items-center gap-[5px]">
          <p className="text-base font-medium">{row.totalApplications}</p>
          <span className="bg-[#DEE0E8] text-[#23272C]  rounded-2xl px-3 text-xs font-medium py-1">
            {row.newApplications} new
          </span>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => (
        <Switch
          id={`custom-switch-${row.id}`} // Assign unique id for each switch
          ripple={false}
          className="h-full w-full checked:bg-[#10A37F]"
          containerProps={{
            className: "w-11 h-6",
          }}
          circleProps={{
            className: "before:hidden left-0.5 border-none",
          }}
          checked={jobStatus[row.id] || false} // Check the status using the job id
          onChange={() => handleToggleStatus(row.id)} // Toggle the status based on the job id
        />
      ),
      sortable: false,
    },
    {
      name: "Date",
      selector: (row) => moment(row.date).format("MMM D, YYYY"),
      cell:(row)=>(
        <p className="font-medium text-base">{moment(row.date).format("MMM D, YYYY")}</p>
      ),
      sortable: true,
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
      title: "Electrician",
      location: "Pune",
      totalApplications: 45,
      newApplications: 5,
      date: "2023-08-02",
    },
    {
      id: 2,
      title: "Plumber",
      location: "Delhi",
      totalApplications: 60,
      newApplications: 1,
      date: "2023-08-05",
    },
    {
      id: 3,
      title: "Welder",
      location: "Chennai",
      totalApplications: 40,
      newApplications: 4,
      date: "2023-08-05",
    },
    {
      id: 4,
      title: "Painter",
      location: "Ludhiana",
      totalApplications: 55,
      newApplications: 6,
      date: "2023-08-05",
    },
    {
      id: 5,
      title: "Roofer",
      location: "Ludhiana",
      totalApplications: 35,
      newApplications: 10,
      date: "2023-08-05",
    },
    {
      id: 6,
      title: "Mechanist",
      location: "Mumbai",
      totalApplications: 45,
      newApplications: 14,
      date: "2023-08-05",
    },
    {
      id: 7,
      title: "Welder",
      location: "Chennai",
      totalApplications: 40,
      newApplications: 4,
      date: "2023-08-05",
    },
    {
      id: 8,
      title: "Painter",
      location: "Ludhiana",
      totalApplications: 55,
      newApplications: 6,
      date: "2023-08-05",
    },
    // Add more jobs as necessary
  ];

  return (
    <div
      className="w-full flex flex-col h-[100vh] overflow-y-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex items-center gap-[10px]  mt-8">
        <h1 className="text-3xl font-semibold text-[#2A397E]">Vacancies</h1>
        <button className="bg-[#10A37F] text-white text-base flex items-center justify-center py-1 px-8 rounded-lg h-min">
          All Vacancies
        </button>
        <button className="bg-[#75FF98] text-black text-base flex items-center justify-center py-1 px-8 rounded-lg h-min">
          Open
        </button>
        <button className="bg-[#96FF85] text-black text-base flex items-center justify-center py-1 px-8 rounded-lg h-min">
          Completed
        </button>
        <button className="bg-[#DEE0E8] text-black text-base flex items-center justify-center py-1 px-8 rounded-lg h-min">
          In Progress
        </button>
       
      </div>
      <div className="flex flex-col w-full mt-8">
        {/* <button onClick={handleClearRows}>Clear Selected Rows</button> */}
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
    </div>
  );
};

export default PostJobs;
