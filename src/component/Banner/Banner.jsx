import React from "react";

const Banner = () => {
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h2 className="text-3xl md:text-5xl font-bold  mb-4">
            Give work a new look with Task Management views.
          </h2>
          <div className="w-[90%] h-1 bg-gradient-to-r from-teal-500 to-teal-800 mb-4"></div>
          <p className=" text-lg leading-relaxed">
            See your projects from every angle with Board, Timeline, Table,
            Calendar, Dashboard, Map and Workspace views that will bring a fresh
            perspective to the task at hand. Boards are available to all users.
            Additional views require a Premium or Enterprise account.
          </p>
          <button className="btn btn-outline border-teal-600 py-6 px-8 mt-4 hover:bg-[#43dadc9d]">
            Try views for free
          </button>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center ">
          <img
            src="https://i.ibb.co.com/Ps4MFnNN/Sign-up-bro.png"
            alt="Trello Board"
            className="w-full max-w-lg"
          />
        </div>
      </section>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold   text-center mb-8 mt-30">
          See what views can do for you
        </h2>
      </div>
      <div
        className="w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg mb-40"
        style={{ height: "400px" }}
      >
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/Sr9yRqOZMYU"
          title="Website Overview Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Banner;
