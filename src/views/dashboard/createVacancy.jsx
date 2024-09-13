import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateVacancy = () => {
    const navigate=useNavigate();
  return (
    <div
      className="w-full flex flex-col items-center h-[100vh] overflow-y-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      <h1 className="w-full text-2xl font-semibold text-[#2A3980]">
        Create Vacancy
      </h1>
      <form
        action=""
        className="bg-white rounded-xl shadow-md p-6 py-6 w-full mt-6"
      >
        <div className="w-full">
          <h1 className="font-medium text-2xl">Basic Information</h1>
          <div className="flex w-full mt-4">
            <div className="w-6/12 flex flex-col">
              <div className="flex  w-full my-4 justify-center items-center gap-[10px]">
                <label
                  htmlFor="jobTittle"
                  className="font-medium w-3/12 text-right text-base"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobTittle"
                  name="jobTittle"
                  className="rounded-xl p-2 bg-[#F6F6F6] w-9/12 max-w-full outline-none border-[1px] border-[#E0E4EA] focus:border-2"
                  placeholder="Enter Job title"
                  required
                />
              </div>
              <div className="flex  w-full my-4 justify-center items-center gap-[10px]">
                <label
                  htmlFor="jobTittle"
                  className="font-medium w-3/12 text-right text-base"
                >
                  Job Type
                </label>
                <div className="w-9/12 flex gap-[10px] justify-between">
                  <div className="flex gap-[5px]">
                    <input type="radio" name="full-time" id="full-time" />
                    <label htmlFor="full-time">Full Time</label>
                  </div>
                  <div className="flex gap-[5px]">
                    <input type="radio" name="part-time" id="part-time" />
                    <label htmlFor="part-time">Part Time</label>
                  </div>
                  <div className="flex gap-[5px]">
                    <input type="radio" name="contract" id="contract" />
                    <label htmlFor="contract">Contract</label>
                  </div>
                  <div className="flex gap-[5px]">
                    <input type="radio" name="internship" id="internship" />
                    <label htmlFor="internship">Internship</label>
                  </div>
                </div>
              </div>
              <div className="flex  w-full my-4 justify-center items-center gap-[10px]">
                <label
                  htmlFor="jobLocation"
                  className="font-medium w-3/12 text-right text-base"
                >
                  Job Location
                </label>
                <input
                  type="text"
                  id="jobLocation"
                  name="jobLocation"
                  className="rounded-xl p-2 bg-[#F6F6F6] w-9/12 max-w-full outline-none focus:border-2 border-[1px] border-[#E0E4EA]"
                  placeholder="Enter Job Location"
                  required
                />
              </div>
              <div className="flex  w-full my-4 justify-center items-start gap-[10px]">
                <label
                  htmlFor="jobDescription"
                  className="font-medium w-3/12 text-right text-base"
                >
                  Job Description
                </label>
                <textarea
                  type="text"
                  id="jobDescription"
                  name="jobDescription"
                  className="rounded-xl p-2 bg-[#F6F6F6] w-9/12 max-w-full outline-none focus:border-2 border-[1px] border-[#E0E4EA] resize-none h-[200px]"
                  placeholder="Job Description"
                  required
                />
              </div>
            </div>
            <div className="w-6/12 flex flex-col">
              <div className="flex  w-full my-4 justify-center items-center gap-[10px]">
                <label
                  htmlFor="jobCategory"
                  className="font-medium w-3/12 text-right text-base"
                >
                  Job Category
                </label>
                <select
                  name="jobCategory"
                  id="jobCategory"
                  className="rounded-xl p-2 bg-[#F6F6F6] w-9/12 max-w-full outline-none focus:border-2 border-[1px] border-[#E0E4EA]"
                >
                  <option value="">Choose Category</option>
                  <option value="Transportation and Logistics">
                    Transportation and Logistics
                  </option>
                  <option value="Healthcare Support">Healthcare Support</option>
                  <option value="Food Service and Hospitality">
                    Food Service and Hospitality
                  </option>
                </select>
              </div>
              <div className="flex  w-full my-4 justify-center items-center gap-[10px]">
                <label
                  htmlFor="jobTittle"
                  className="font-medium w-3/12 text-right text-base"
                >
                  No of Vacancy
                </label>
                <input
                  type="number"
                  id="jobLocation"
                  name="jobLocation"
                  className="rounded-xl p-2 bg-[#F6F6F6] w-9/12 max-w-full outline-none focus:border-2 border-[1px] border-[#E0E4EA]"
                  placeholder="Enter Number"
                  required
                />
              </div>
              <div className="flex  w-full my-4 justify-center items-center gap-[10px]">
                <label
                  htmlFor="salary"
                  className="font-medium w-3/12 text-right text-base"
                >
                  Salary
                </label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  className="rounded-xl p-2 bg-[#F6F6F6] w-9/12 max-w-full outline-none focus:border-2 border-[1px] border-[#E0E4EA]"
                  placeholder="Salary"
                  required
                />
              </div>
              <div className="flex  w-full my-4 justify-center items-center gap-[10px]">
                <label
                  htmlFor="shifts"
                  className="font-medium w-3/12 text-right text-base"
                >
                  Shifts
                </label>
                <select
                  name="shifts"
                  id="shifts"
                  className="rounded-xl p-2 bg-[#F6F6F6] w-9/12 max-w-full outline-none focus:border-2 border-[1px] border-[#E0E4EA]"
                >
                  <option value="">Choose Shifts</option>
                  <option value="Day Shift">Day Shift</option>
                  <option value="Night Shift">Night Shift</option>
                </select>
              </div>
              <div className="flex  w-full my-4 justify-center items-center gap-[10px]">
                <label
                  htmlFor="status"
                  className="font-medium w-3/12 text-right text-base"
                >
                  Vacancy Status
                </label>
                <select
                  name="status"
                  id="status"
                  className="rounded-xl p-2 bg-[#F6F6F6] w-9/12 max-w-full outline-none focus:border-2 border-[1px] border-[#E0E4EA]"
                >
                  <option value="">Choose status</option>
                  <option value="Day Shift">Active</option>
                  <option value="Night Shift">Night Shift</option>
                </select>
              </div>
              <div className="flex  w-full my-4 justify-center items-center gap-[10px]">
                <label
                  htmlFor="status"
                  className="font-medium w-3/12 text-right text-base"
                >
                  Dates
                </label>
                <div className="flex w-full justify-between">
                  <input
                    type="date"
                    name="opening_date"
                    id="opening_date"
                    className="rounded-xl p-2 bg-[#F6F6F6] w-5/12 max-w-full outline-none focus:border-2 border-[1px] border-[#E0E4EA]"
                  />
                  <input
                    type="date"
                    name="opening_date"
                    id="opening_date"
                    className="rounded-xl p-2 bg-[#F6F6F6] w-5/12 max-w-full outline-none focus:border-2 border-[1px] border-[#E0E4EA]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-y-2 border-[#E0E4EA] my-4 py-4">
          <h1 className="font-medium text-2xl">Applicant Requirement</h1>
          <div className="flex w-full mt-4">
            <div className="w-6/12 flex flex-col">
              <div className="flex  w-full my-4 justify-center items-center gap-[10px]">
                <label
                  htmlFor="workExperience"
                  className="font-medium w-3/12 text-right text-base"
                >
                  Work Experience
                </label>
                <input
                  type="text"
                  id="workExperience"
                  name="workExperience"
                  className="rounded-xl p-2 bg-[#F6F6F6] w-9/12 max-w-full outline-none border-[1px] border-[#E0E4EA] focus:border-2"
                  placeholder="Enter Work Experience"
                  required
                />
              </div>

              <div className="flex  w-full my-4 justify-center items-start gap-[10px]">
                <label
                  htmlFor="responsibilities"
                  className="font-medium w-3/12 text-right text-base"
                >
                  Responsibilities
                </label>
                <textarea
                  type="text"
                  id="responsibilities"
                  name="responsibilities"
                  className="rounded-xl p-2 bg-[#F6F6F6] w-9/12 max-w-full outline-none focus:border-2 border-[1px] border-[#E0E4EA] resize-none h-[200px]"
                  placeholder="Performing tasks related to...
Organizing and coordinating...
Analyzing and optimizing..."
                  required
                />
              </div>
            </div>
            <div className="w-6/12 flex flex-col">
              <div className="flex  w-full my-4 justify-center items-center gap-[10px]">
                <label
                  htmlFor="education"
                  className="font-medium w-3/12 text-right text-base"
                >
                  Education
                </label>
                <select
                  name="education"
                  id="education"
                  className="rounded-xl p-2 bg-[#F6F6F6] w-9/12 max-w-full outline-none focus:border-2 border-[1px] border-[#E0E4EA]"
                >
                  <option value="">Enter Education</option>
                  <option value="High-school">High School</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Bachelor's of Technology">
                    Bachelor's of Technology
                  </option>
                </select>
              </div>

              <div className="flex  w-full my-4 justify-center items-start gap-[10px]">
                <label
                  htmlFor="duties"
                  className="font-medium w-3/12 text-right text-base"
                >
                  Duties
                </label>
                <textarea
                  type="text"
                  id="duties"
                  name="duties"
                  className="rounded-xl p-2 bg-[#F6F6F6] w-9/12 max-w-full outline-none focus:border-2 border-[1px] border-[#E0E4EA] resize-none h-[200px]"
                  placeholder="Planning and executing...
Ensuring the efficient functioning of..
Supporting processes.."
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-4">
          <h1 className="font-medium text-2xl">Contact Information</h1>
          <div className="flex w-full mt-4">
            <div className="w-6/12 flex flex-col">
              <div className="flex  w-full my-4 justify-center items-center gap-[10px]">
                <label
                  htmlFor="contactPerson"
                  className="font-medium w-3/12 text-right text-base"
                >
                  Contact Person
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  className="rounded-xl p-2 bg-[#F6F6F6] w-9/12 max-w-full outline-none border-[1px] border-[#E0E4EA] focus:border-2"
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div className="flex  w-full my-4 justify-center items-center gap-[10px]">
                <label
                  htmlFor="phoneNumber"
                  className="font-medium w-3/12 text-right text-base"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="rounded-xl p-2 bg-[#F6F6F6] w-9/12 max-w-full outline-none border-[1px] border-[#E0E4EA] focus:border-2"
                  placeholder="Enter Phone Number"
                  required
                />
              </div>
            </div>
            <div className="w-6/12 flex flex-col">
              <div className="flex  w-full my-4 justify-center items-center gap-[10px]">
                <label
                  htmlFor="email"
                  className="font-medium w-3/12 text-right text-base"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="rounded-xl p-2 bg-[#F6F6F6] w-9/12 max-w-full outline-none border-[1px] border-[#E0E4EA] focus:border-2"
                  placeholder="Enter Email"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="w-full flex justify-end my-6">
            <div className="flex items-center gap-[20px]">
                <p className="text-[#A59898]" onClick={()=>navigate('/dashboard/jobs')}>Cancel</p>
                <button className="text-white bg-[#10A37F] rounded-3xl px-10 py-2">Save</button>
            </div>
      </div>
    </div>
  );
};

export default CreateVacancy;
