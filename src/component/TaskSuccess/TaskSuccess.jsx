import React from "react";
import { Link } from "react-router-dom";


const TaskSuccess = () => {
  return (
    <>
      {/* 1 */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 ">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.ibb.co.com/WWPxCrwB/Time-management-cuate.png"
            alt="Trello Board"
            className="w-full max-w-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            Success starts with a Trello board
          </h2>
          <div className="w-[90%] h-1 bg-gradient-to-r from-teal-500 to-teal-800 mb-4"></div>
          <p className=" text-lg leading-relaxed">
            Similar to a Kanban board, a Trello board is the easiest way to go
            from idea to action. Plan projects and break down each step of the
            way to getting things done. Instantly see the status of every task
            and celebrate each accomplishment. Project management has never been
            so powerful, yet so fun.
          </p>
         <Link to="/addTask"> 
         <button className="btn btn-outline border-teal-600 py-6 px-8 mt-4 hover:bg-[#43dadc9d]">
            Add your task
          </button>
          </Link>
        </div>
      </section>

      {/* 2 */}

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 ">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
          Bring a fresh perspective to the task at hand (pun intended) with Calendar View
          </h2>
          <div className="w-[90%] h-1 bg-gradient-to-r from-teal-500 to-teal-800 mb-4"></div>
          <p className=" text-lg leading-relaxed">
          Visualize checklist items and cards with due dates in Calendar View, showing what tasks are due in the days and weeks ahead. Cards will be arranged according to their due date and will display any labels, members, or checklists added to them.
          </p>
        <Link to="/drag">
        <button className="btn btn-outline border-teal-600 py-6 px-8 mt-4 hover:bg-[#43dadc9d]">
            Drag & Drop
          </button>
        </Link>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.ibb.co.com/VWrJQW0t/Organizing-projects-pana.png"
            alt="Trello Board"
            className="w-full max-w-lg"
          />
       
        </div>
      </section>

      {/* 3 */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 ">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.ibb.co.com/qMR6zhf0/Time-management-bro.png"
            alt="Trello Board"
            className="w-full max-w-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
          Prioritize tasks and keep your team aligned
          </h2>
          <div className="w-[90%] h-1 bg-gradient-to-r from-teal-500 to-teal-800 mb-4"></div>
          <p className=" text-lg leading-relaxed">
          Prioritize with labels to identify what is high, medium, or low priority and bring an extra layer of shared understanding to your tasks. You can even filter by a certain label to only view cards associated with the label you want to view.
          </p>
          <button className="btn btn-outline border-teal-600 py-6 px-8 mt-4 hover:bg-[#43dadc9d]">
            Connect wit us
          </button>
        </div>
      </section>
    </>
  );
};

export default TaskSuccess;
