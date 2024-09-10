import React, { useState, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [calendarDays, setCalendarDays] = useState([]);
  const [showMonthList, setShowMonthList] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState({});

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
  };

  const daysInMonth = [
    31,
    getFebDays(currentYear),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  const generateCalendar = (month, year) => {
    const days = [];
    const firstDay = new Date(year, month, 1).getDay();

    for (let i = 0; i < daysInMonth[month] + firstDay; i++) {
      if (i < firstDay) {
        days.push("");
      } else {
        days.push(i - firstDay + 1);
      }
    }
    setCalendarDays(days);
  };

  useEffect(() => {
    generateCalendar(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prevYear) => prevYear - 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prevYear) => prevYear + 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth + 1);
    }
  };

  const handleMonthChange = (index) => {
    setCurrentMonth(index);
    setShowMonthList(false);
  };

  const handleDateClick = (day) => {
    if (day) {
      setSelectedDate(new Date(currentYear, currentMonth, day));
    }
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      const dateKey = selectedDate.toDateString();
      setTasks((prevTasks) => ({
        ...prevTasks,
        [dateKey]: [...(prevTasks[dateKey] || []), taskInput],
      }));
      setTaskInput("");
    }
  };

  const hasTaskForDay = (day) => {
    const dateKey = new Date(currentYear, currentMonth, day).toDateString();
    return tasks[dateKey] && tasks[dateKey].length > 0;
  };
  return (
    <div className="w-full flex flex-col justify-center mt-5">
      {/* Calendar Header */}
      <div className="flex justify-between mb-3">
        <span
          className="text-xl font-semibold cursor-pointer p-2"
          onClick={() => setShowMonthList(!showMonthList)}
        >
          {monthNames[currentMonth]}
        </span>
        <div className="flex items-center">
          <span
            className="h-8 w-8 grid place-items-center cursor-pointer hover:bg-gray-200 rounded-full"
            onClick={handlePreviousMonth}
          >
            <GoArrowLeft className="text-2xl text-gray-500 hover:text-blue-700" />
          </span>
          <span
            className="h-8 w-8 grid place-items-center cursor-pointer hover:bg-gray-200 rounded-full"
            onClick={handleNextMonth}
          >
            <GoArrowRight className="text-2xl text-gray-500 hover:text-blue-700" />
          </span>
        </div>
      </div>

      {/* Calendar Body */}
      <div className="bg-gray-100 rounded-xl py-4 px-3 flex flex-col">
        <div className="grid grid-cols-7 text-gray-600 font-base">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-gray-900 mt-4">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`relative h-10 w-10 flex items-center justify-center p-1 cursor-pointer rounded-full ${
                day === currentDate.getDate() &&
                currentMonth === currentDate.getMonth() &&
                currentYear === currentDate.getFullYear()
                  ? "bg-[#10A37F] text-white"
                  : "hover:bg-gray-300"
              }`}
              onClick={() => handleDateClick(day)}
            >
              {day}
              {hasTaskForDay(day) && (
                <span
                  className={`absolute bottom-1 w-2 h-2  rounded-full ${
                    day === currentDate.getDate() &&
                    currentMonth === currentDate.getMonth() &&
                    currentYear === currentDate.getFullYear()
                      ? "bg-[#fff]"
                      : "bg-[#757577]"
                  }`}
                ></span> // Task Indicator (Red Dot)
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedDate && (
        <div className="task-section mt-8">
          <div className="flex w-full items-center">
            <h3 className="text-base font-medium w-4/12">
              {selectedDate.toDateString()}
            </h3>
            <div className="w-8/12 flex h-[1px] bg-[#757577]"></div>
          </div>

          {/* Task Input */}
          <form className="flex mt-2" onSubmit={handleTaskSubmit}>
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="Add a task"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
            <button
              type="submit"
              className="bg-[#2A3980] text-white rounded-lg px-4 py-2 ml-2"
            >
              Add
            </button>
          </form>

          {/**default tasks */}
          <div className="mt-4 w-full">
              <div className="my-1">
                <p className="text-xs text-[#ACACAC]">August 18 @ 3:30pm - 5:00pm</p>
                <h1 className="text-base text-[#000]">Interview is scheduled with Rajesh Kumar</h1>
              </div>
              <div className="my-1">
                <p className="text-xs text-[#ACACAC]">August 18 @ 3:30pm - 5:00pm</p>
                <h1 className="text-base text-[#000]">Interview is scheduled with Rajesh Kumar</h1>
              </div>
          </div>

          {/* Display Tasks */}
          <div className="mt-4">
            {tasks[selectedDate.toDateString()] ? (
              <ul className="list-disc list-inside">
                {tasks[selectedDate.toDateString()].map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No tasks for this day.</p>
            )}
          </div>
        </div>
      )}

      {/* Month List */}
      {showMonthList && (
        <div className="grid grid-cols-3 gap-3 bg-gray-200 rounded-xl p-3 absolute top-16">
          {monthNames.map((month, index) => (
            <div
              key={index}
              className="cursor-pointer hover:bg-purple-400 hover:text-white p-2 rounded-lg"
              onClick={() => handleMonthChange(index)}
            >
              {month}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Calendar;
