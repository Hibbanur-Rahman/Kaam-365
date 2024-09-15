import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dialog } from "@material-tailwind/react";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { BsCheck2 } from "react-icons/bs";

const SearchCandidate = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState(null);
  const [selectedFieldOfWork, setSelectedFieldOfWork] = useState(null);
  const [selectedSalary, setSelectedSalary] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [openFilterModal, setOpenFilterModal] = useState(false);

  const Skills = [
    "Technical Skills",
    "Physical Fitness",
    "Safety Awareness",
    "Attention To Detail",
    "Problem - Solving",
    "Teamwork",
    "Time Management",
    "Adaptability",
    "Communication",
    "Customer Service",
    "Electrician",
    "Plumber",
    "Attention To Detail",
    "Problem - Solving",
    "Teamwork",
    "Time Management",
  ];

  const fieldOfWork = [
    "Construction worker",
    "Electrician",
    "Plumber",
    "Carpenter",
    "Painter",
    "Welder",
    "Mechanic",
    "Mason",
    "Security Guard",
  ];

  const salary = ["All Range", "<25k", "25k-50k", ">70k"];

  const type = [
    "All Type",
    "Full-Time",
    "Part-Time",
    "Contractual",
    "Freelance",
    "Internship",
  ];

  const education = [
    "Undergraduate",
    "Graduate",
    "Phd",
    "10th Grade",
    "12th Grade",
    "Diploma",
  ];
  const location = ["Delhi", "Pune", "Lucknow", "Mumbai"];
  const experience = ["0 Yrs", "1 Yrs", "2 Yrs", "3 Yrs", "4 Yrs", "5 Yrs"];
  const handleOpen = () => setOpen(!open);

  const handleSkillsSelect = (skillItem) => {
    setSelectedSkills(skillItem); // Set the selected Skills
  };

  const handleOpenFilterModal = () => {
    setOpenFilterModal(!openFilterModal);
  };

  const handleFieldOfWorkSelect = (fieldOfWorkItem) => {
    setSelectedFieldOfWork(fieldOfWorkItem);
  };

  const handleSalarySelect = (SalaryItem) => {
    setSelectedSalary(SalaryItem);
  };
  const handleTypeSelect = (TypeItem) => {
    setSelectedType(TypeItem);
  };
  const handleEducationSelect = (EducationItem) => {
    setSelectedEducation(EducationItem);
  };
  const handleLocationSelect = (LocationItem) => {
    setSelectedLocation(LocationItem);
  };
  const handleExperienceSelect = (ExperienceItem) => {
    setSelectedExperience(ExperienceItem);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="relative w-11/12">
        <input
          type="text"
          placeholder="Search by name, position"
          className="w-full p-2 px-[50px] rounded-xl border outline-none placeholder:text-black"
        />
        <CiSearch className="text-gray-500 text-xl cursor-pointer absolute left-[20px] bottom-[12px]" />
        <IoFilter
          className="text-gray-500 text-xl cursor-pointer absolute right-[20px] bottom-[12px]"
          onClick={handleOpenFilterModal}
        />
      </div>
      <div className="w-full flex my-8">
        <button
          className="flex items-center gap-[5px] bg-white rounded-lg px-6 py-1 border text-[#3A3A3A] font-medium"
          onClick={() => handleOpen()}
        >
          <FiPlus /> Skills
        </button>
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-between">
          <h1 className="text-2xl font-medium text-[#2A3980]">Recent Search</h1>
          <p className="text-[#10A37F] text-sm font-medium cursor-pointer">
            Clear all
          </p>
        </div>
        <div className="w-full flex flex-wrap gap-[15px] mt-4">
          <button className="text-base bg-[#D4DBFF] rounded-lg px-10 py-1 font-medium text-[#3A3A3A]">
            Mechanic
          </button>
          <button className="text-base bg-[#D4DBFF] rounded-lg px-10 py-1 font-medium text-[#3A3A3A]">
            Carpenter
          </button>
          <button className="text-base bg-[#D4DBFF] rounded-lg px-10 py-1 font-medium text-[#3A3A3A]">
            Plumber
          </button>
          <button className="text-base bg-[#D4DBFF] rounded-lg px-10 py-1 font-medium text-[#3A3A3A]">
            Sweeper
          </button>
          <button className="text-base bg-[#D4DBFF] rounded-lg px-10 py-1 font-medium text-[#3A3A3A]">
            Car Washer
          </button>
          <button className="text-base bg-[#D4DBFF] rounded-lg px-10 py-1 font-medium text-[#3A3A3A]">
            Electrician
          </button>
          <button className="text-base bg-[#D4DBFF] rounded-lg px-10 py-1 font-medium text-[#3A3A3A]">
            Mechanic
          </button>
        </div>
      </div>

      <Dialog
        open={open}
        handler={handleOpen}
        className="md:max-w-[1000px] md:min-w-[1000px] lg:max-w-[1000px] lg:min-w-[1000px] 2xl:min-w-[1000px] 2xl:max-w-[1000px]  rounded-3xl bg-white flex flex-col items-center p-8"
      >
        <div className="flex w-full relative">
          <input
            type="text"
            className="rounded-3xl p-2 px-4 bg-[#F6F6F6] w-full max-w-full outline-none focus:border mt-2"
            placeholder="Choose Your Skills"
          />
          <CiSearch className="text-gray-500 text-xl cursor-pointer absolute right-[20px] bottom-[20%]" />
        </div>
        <div className="flex flex-wrap mt-8 mb-8 justify-center">
          {Array.isArray(Skills) &&
            Skills.map((item, key) => (
              <div className="md:w-4/12 lg:w-3/12 w-6/12 px-2" key={key}>
                <button
                  className={`${
                    selectedSkills === item
                      ? "bg-[#2A3980] text-white"
                      : "bg-[#D4DBFF] text-black"
                  } flex items-center justify-center gap-[3px] rounded-lg  py-2 mt-2 mb-2  w-full`}
                  onClick={() => handleSkillsSelect(item)}
                >
                  {item}
                  {selectedSkills === item ? (
                    <BsCheck2 className="font-bold text-xl" />
                  ) : (
                    ""
                  )}
                </button>
              </div>
            ))}
        </div>
        <div className="flex w-full justify-end mt-8 mb-8 px-4">
          <Link className="font-semibold text-[#10A37F] underline">
            See all
          </Link>
        </div>
        <div className="w-full flex justify-end">
          <div className="flex items-center gap-[15px]">
            <p className="text-[#A59898]" onClick={handleOpen}>
              Cancel
            </p>
            <button
              className="bg-[#10A37F] rounded-2xl text-white px-8 py-1"
              onClick={handleOpen}
            >
              Apply
            </button>
          </div>
        </div>
      </Dialog>
      <Dialog
        open={openFilterModal}
        handler={handleOpenFilterModal}
        className="md:max-w-[1200px] md:min-w-[1200px] lg:max-w-[1200px] lg:min-w-[1200px] 2xl:min-w-[1200px] 2xl:max-w-[1200px]  rounded-3xl bg-transparent bg-opacity-60 shadow-none flex flex-col items-center p-8 h-[100vh] overflow-y-scroll font-poppins"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="w-full flex ">
          <div className="relative w-11/12">
            <input
              type="text"
              placeholder="Search by name, position"
              className="w-full p-2 px-[20px] rounded-3xl border outline-none placeholder:text-black"
            />
            <CiSearch className="text-gray-500 text-xl cursor-pointer absolute right-[40px] bottom-[12px]" />
            <IoFilter
              className="text-gray-500 text-xl cursor-pointer absolute right-[20px] bottom-[12px]"
              onClick={handleOpenFilterModal}
            />
          </div>
        </div>
        <div
          className="w-full rounded-3xl bg-white p-4 px-8 mt-8 overflow-y-scroll"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="w-full flex flex-col my-2">
            <div className="w-full flex justify-between px-2">
              <p className="text-black text-base font-semibold">
                Field of work
              </p>
              <p className="text-[#10A37F] text-base font-medium">See all</p>
            </div>
            <div className="flex flex-wrap w-full">
              {Array.isArray(fieldOfWork) &&
                fieldOfWork.map((item, key) => (
                  <div className="md:w-4/12 lg:w-2/12 w-6/12 px-2" key={key}>
                    <button
                      className={`${
                        selectedFieldOfWork === item
                          ? "bg-[#2A3980] text-white"
                          : "bg-[#D4DBFF] text-black"
                      } flex items-center justify-center gap-[3px] rounded-lg  py-2 mt-2 mb-2  w-full font-medium text-sm`}
                      onClick={() => handleFieldOfWorkSelect(item)}
                    >
                      {item}
                      {selectedFieldOfWork === item ? (
                        <BsCheck2 className="font-bold text-xl" />
                      ) : (
                        ""
                      )}
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <div className="w-full flex flex-col my-2">
            <div className="w-full flex justify-between px-2">
              <p className="text-black text-base font-semibold">Salary</p>
            </div>
            <div className="flex flex-wrap w-full">
              {Array.isArray(salary) &&
                salary.map((item, key) => (
                  <div className="md:w-4/12 lg:w-2/12 w-6/12 px-2" key={key}>
                    <button
                      className={`${
                        selectedSalary === item
                          ? "bg-[#2A3980] text-white"
                          : "bg-[#D4DBFF] text-black"
                      } flex items-center justify-center gap-[3px] rounded-lg  py-2 mt-2 mb-2  w-full font-medium text-sm`}
                      onClick={() => handleSalarySelect(item)}
                    >
                      {item}
                      {selectedSalary === item ? (
                        <BsCheck2 className="font-bold text-xl" />
                      ) : (
                        ""
                      )}
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <div className="w-full flex flex-col my-2">
            <div className="w-full flex justify-between px-2">
              <p className="text-black text-base font-semibold">Type</p>
            </div>
            <div className="flex flex-wrap w-full">
              {Array.isArray(type) &&
                type.map((item, key) => (
                  <div className="md:w-4/12 lg:w-2/12 w-6/12 px-2" key={key}>
                    <button
                      className={`${
                        selectedType === item
                          ? "bg-[#2A3980] text-white"
                          : "bg-[#D4DBFF] text-black"
                      } flex items-center justify-center gap-[3px] rounded-lg  py-2 mt-2 mb-2  w-full font-medium text-sm`}
                      onClick={() => handleTypeSelect(item)}
                    >
                      {item}
                      {selectedType === item ? (
                        <BsCheck2 className="font-bold text-xl" />
                      ) : (
                        ""
                      )}
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <div className="w-full flex flex-col my-2">
            <div className="w-full flex justify-between px-2">
              <p className="text-black text-base font-semibold">Education</p>
            </div>
            <div className="flex flex-wrap w-full mt-3">
              {Array.isArray(education) &&
                education.map((item, key) => (
                  <div className="md:w-4/12 lg:w-2/12 w-6/12 px-2" key={key}>
                    <label className="flex items-center gap-2 w-full">
                      <input
                        type="radio"
                        name="education"
                        value={item}
                        checked={selectedEducation === item}
                        onChange={() => handleEducationSelect(item)}
                        className="form-radio h-4 w-4 text-[#2A3980] rounded-full"
                      />
                      <span className="text-sm font-medium text-[#3A3A3A]">
                        {item}
                      </span>
                    </label>
                  </div>
                ))}
            </div>
          </div>

          <div className="w-full flex flex-col my-2">
            <div className="w-full flex justify-between px-2">
              <p className="text-black text-base font-semibold">Location</p>
              <p className="text-[#10A37F] text-base font-medium">See all</p>
            </div>
            <div className="flex flex-wrap w-full">
              {Array.isArray(location) &&
                location.map((item, key) => (
                  <div className="md:w-4/12 lg:w-2/12 w-6/12 px-2" key={key}>
                    <button
                      className={`${
                        selectedLocation === item
                          ? "bg-[#2A3980] text-white"
                          : "bg-[#D4DBFF] text-black"
                      } flex items-center justify-center gap-[3px] rounded-lg  py-2 mt-2 mb-2  w-full font-medium text-sm`}
                      onClick={() => handleLocationSelect(item)}
                    >
                      {item}
                      {selectedLocation === item ? (
                        <BsCheck2 className="font-bold text-xl" />
                      ) : (
                        ""
                      )}
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <div className="w-full flex flex-col my-4">
            <div className="w-full flex justify-between px-2">
              <p className="text-black text-base font-semibold">Experience</p>
            </div>
            <div className="relative flex items-center justify-between w-full mt-4">
              {/* Timeline line */}
              <div className="absolute top-1/2 w-full h-[2px] bg-gray-300 z-0 "></div>

              {/* Experience Dots */}
              {Array.isArray(experience) &&
                experience.map((item, key) => (
                  <div
                    className="relative flex flex-col items-center z-10"
                    key={key}
                  >
                    <button
                      className={`${
                        selectedExperience === item
                          ? "bg-[#2A3980] h-6 w-6"
                          : "bg-[#D4DBFF] h-4 w-4"
                      } rounded-full relative transition-all duration-300 ease-in-out `}
                      onClick={() => handleExperienceSelect(item)}
                    ></button>

                    {/* Tooltip */}
                    <div
                      className={`${
                        selectedExperience === item ? "flex" : "hidden"
                      }  absolute w-max bg-[#D4DBFF] rounded-xl top-[-30px] text-sm px-4 text-[#4F4F4F] font-medium transition-all duration-300 ease-in-out`}
                    >
                      {item}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="w-full flex justify-end">
            <div className="flex items-center gap-[15px]">
              <p className="text-[#A59898]" onClick={handleOpen}>
                Cancel
              </p>
              <button
                className="bg-[#10A37F] rounded-2xl text-white px-8 py-1"
                onClick={handleOpen}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default SearchCandidate;
