import React, { useState } from "react";


// Import react-circular-progressbar module and styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // import calendar styles

import dashboardHeroImg from "../../assets/images/dashboard-hero-img.svg";
import profileImg from "../../assets/images/profile-img.png";
import { BsFillChatLeftTextFill } from "react-icons/bs";

import '../../assets/styles/dashboard.scss'
const Dashboard = () => {
  const [value, setValue] = useState(new Date());
  const [tasks, setTasks] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [taskInput, setTaskInput] = useState("");

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleAddTask = () => {
    const dateString = selectedDate.toDateString();
    setTasks((prevTasks) => ({
      ...prevTasks,
      [dateString]: [...(prevTasks[dateString] || []), taskInput],
    }));
    setTaskInput(""); // reset input field
  };
  return (
    <div
      className="w-full flex py-3 h-[100vh] overflow-y-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      {/** ========== Main section =========== */}
      <div className="w-8/12 flex flex-col">
        <div
          className="flex w-full  rounded-xl"
          style={{
            background:
              "linear-gradient(48deg, rgba(65,85,183,1) 0%, rgba(40,54,123,1) 68%, rgba(30,42,98,1) 100%)",
          }}
        >
          <div className="w-6/12 flex flex-col justify-between p-4 px-8">
            <div className="h-min w-max py-1 shadow-2xl px-4 rounded-lg bg-[rgba(182,182,182,0.3)] border-2 border-[rgba(150,157,166,0.5)]">
              <p className="text-sm text-white ">Aug 18,1024</p>
            </div>
            <div className="">
              <h1 className="font-semibold text-white text-2xl">
                Good Day, Alex !
              </h1>
              <p className="text-lg text-white mt-3">Have a great day !</p>
            </div>
          </div>
          <div className="w-6/12 flex items-baseline justify-center pt-4">
            <img src={dashboardHeroImg} alt="" className="w-full" />
          </div>
        </div>

        <div className="w-full flex flex-col mt-4">
          <div className="flex w-full justify-between">
            <p className="text-lg font-semibold text-[#2A3980]">
              You need to hire
            </p>
            <p className="text-[#23A757] font-semibold underline cursor-pointer">
              See all
            </p>
          </div>
          <div className="flex flex-wrap w-full ">
            <div className="w-6/12 p-4 ps-0">
              <div className="w-full rounded-xl bg-white flex p-5 justify-between items-center">
                <div className="flex items-center gap-[15px]">
                  <h1 className="text-[2.1rem] text-black font-semibold">2</h1>
                  <div className="">
                    <h1 className="text-base font-semibold text-[#2A3980]">
                      Electrician
                    </h1>
                    <p className="text-[#3A3A3A] text-xs">Urban Clap</p>
                  </div>
                </div>

                <CircularProgressbar
                  value={25}
                  text={`${25}%`}
                  strokeWidth={15}
                  className="w-[60px] h-[60px] font-semibold"
                  styles={buildStyles({
                    textColor: "#000",
                    pathColor: "#10A37F",
                    trailColor: "#C4C4C4",
                  })}
                />
              </div>
            </div>
            <div className="w-6/12 p-4 pe-0">
              <div className="w-full rounded-xl bg-white flex p-5 justify-between items-center">
                <div className="flex items-center gap-[15px]">
                  <h1 className="text-[2.1rem] text-black font-semibold">5</h1>
                  <div className="">
                    <h1 className="text-base font-semibold text-[#2A3980]">
                      Plumber
                    </h1>
                    <p className="text-[#3A3A3A] text-xs">Urban Clap</p>
                  </div>
                </div>

                <CircularProgressbar
                  value={75}
                  text={`${75}%`}
                  strokeWidth={15}
                  className="w-[60px] h-[60px] font-semibold"
                  styles={buildStyles({
                    textColor: "#000",
                    pathColor: "#10A37F",
                    trailColor: "#C4C4C4",
                  })}
                />
              </div>
            </div>
            <div className="w-6/12 p-4 ps-0">
              <div className="w-full rounded-xl bg-white flex p-5 justify-between items-center">
                <div className="flex items-center gap-[15px]">
                  <h1 className="text-[2.1rem] text-black font-semibold">3</h1>
                  <div className="">
                    <h1 className="text-base font-semibold text-[#2A3980]">
                      Welder
                    </h1>
                    <p className="text-[#3A3A3A] text-xs">Urban Clap</p>
                  </div>
                </div>

                <CircularProgressbar
                  value={35}
                  text={`${35}%`}
                  strokeWidth={15}
                  className="w-[60px] h-[60px] font-semibold"
                  styles={buildStyles({
                    textColor: "#000",
                    pathColor: "#10A37F",
                    trailColor: "#C4C4C4",
                  })}
                />
              </div>
            </div>
            <div className="w-6/12 p-4 pe-0">
              <div className="w-full rounded-xl bg-white flex p-5 justify-between items-center">
                <div className="flex items-center gap-[15px]">
                  <h1 className="text-[2.1rem] text-black font-semibold">7</h1>
                  <div className="">
                    <h1 className="text-base font-semibold text-[#2A3980]">
                      Carpenter
                    </h1>
                    <p className="text-[#3A3A3A] text-xs">Urban Clap</p>
                  </div>
                </div>

                <CircularProgressbar
                  value={50}
                  text={`${50}%`}
                  strokeWidth={15}
                  className="w-[60px] h-[60px] font-semibold"
                  styles={buildStyles({
                    textColor: "#000",
                    pathColor: "#10A37F",
                    trailColor: "#C4C4C4",
                  })}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full bg-white rounded-xl p-4">
          <div className="flex w-full justify-between">
            <p className="text-lg font-semibold text-[#2A3980]">
              Recruitment Progress
            </p>
            <p className="text-[#23A757] font-semibold underline cursor-pointer">
              See all
            </p>
          </div>

          <div className="flex w-full py-3 items-center justify-between">
            <div className="flex items-center gap-[10px]">
              <img
                src={profileImg}
                alt=""
                className="w-[50px] h-[50px] rounded-full border"
              />
              <div className="">
                <h1 className="text-base font-medium">Sunita Sharma</h1>
                <p className="text-[#ACACAC] text-xs">Construction worker</p>
              </div>
            </div>

            <div className="flex gap-[15px] items-center">
              <p className="font-medium text-sm">Interview 1</p>
              <div className="h-min w-max rounded-3xl px-2 py-1 bg-[#F8F8F8] cursor-pointer">
                <p className="text-sm text-[#4B5DB0] font-medium">
                  View resume
                </p>
              </div>
              <div className="group h-min w-min bg-[rgba(175,184,228,0.47)] p-2 flex items-center justify-center rounded-full cursor-pointer">
                <BsFillChatLeftTextFill className="text-lg  text-[#2A397E]" />
              </div>
            </div>
          </div>

          <div className="flex w-full py-3 items-center justify-between">
            <div className="flex items-center gap-[10px]">
              <img
                src={profileImg}
                alt=""
                className="w-[50px] h-[50px] rounded-full border"
              />
              <div className="">
                <h1 className="text-base font-medium">Rakesh Singh</h1>
                <p className="text-[#ACACAC] text-xs">Construction worker</p>
              </div>
            </div>

            <div className="flex gap-[15px] items-center">
              <p className="font-medium text-sm">Interview 1</p>
              <div className="h-min w-max rounded-3xl px-2 py-1 bg-[#F8F8F8] cursor-pointer">
                <p className="text-sm text-[#4B5DB0] font-medium">
                  View resume
                </p>
              </div>
              <div className="group h-min w-min bg-[rgba(175,184,228,0.47)] p-2 flex items-center justify-center rounded-full cursor-pointer">
                <BsFillChatLeftTextFill className="text-lg  text-[#2A397E]" />
              </div>
            </div>
          </div>

          <div className="flex w-full py-3 items-center justify-between">
            <div className="flex items-center gap-[10px]">
              <img
                src={profileImg}
                alt=""
                className="w-[50px] h-[50px] rounded-full border"
              />
              <div className="">
                <h1 className="text-base font-medium">Rohit Chauhan</h1>
                <p className="text-[#ACACAC] text-xs">Construction worker</p>
              </div>
            </div>

            <div className="flex gap-[15px] items-center">
              <p className="font-medium text-sm">Interview 1</p>
              <div className="h-min w-max rounded-3xl px-2 py-1 bg-[#F8F8F8] cursor-pointer">
                <p className="text-sm text-[#4B5DB0] font-medium">
                  View resume
                </p>
              </div>
              <div className="group h-min w-min bg-[rgba(175,184,228,0.47)] p-2 flex items-center justify-center rounded-full cursor-pointer">
                <BsFillChatLeftTextFill className="text-lg  text-[#2A397E]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** ========== calendar section =========== */}
      <div className="w-5/12 flex justify-center px-4">
        <div className="flex flex-col bg-white w-full px-3 pt-4">
          <Calendar
            onClickDay={handleDateClick}
            value={value}
            onChange={setValue}
            className="bg-[#F4F5F7] w-full outline-none border-none rounded-lg"
          />

          {selectedDate && (
            <div className="task-list">
              <h2>Tasks for {selectedDate.toDateString()}</h2>

              <ul>
                {(tasks[selectedDate.toDateString()] || []).map(
                  (task, index) => (
                    <li key={index}>{task}</li>
                  )
                )}
              </ul>

              <input
                type="text"
                placeholder="Add a new task"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
              />
              <button onClick={handleAddTask}>Add Task</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
