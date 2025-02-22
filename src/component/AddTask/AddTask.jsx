import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddTask = () => {
  const { register, handleSubmit, reset } = useForm();
  const [category, setCategory] = useState("To-Do"); // Default category
  const axiosSecure = useAxiosSecure();

  // Submit function for adding a task
  const onSubmit = async (data) => {
    try {
      const taskData = {
        title: data.title,
        description: data.description || "No description provided", // Default description
        category,
        timestamp: new Date().toISOString(), // Add timestamp here
      };

      // Sending data to backend API
      const response = await axiosSecure.post("/tasks", taskData);

      if (response.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Task Added Successfully",
          text: `Your new task '${data.title}' has been added.`,
        });

        reset(); // Reset form fields
        setCategory("To-Do"); // Reset category
      }
    } catch (error) {
      console.error("Error adding task:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to Add Task",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto  p-8 border rounded shadow-lg my-14">
      <h2 className="text-xl font-semibold mb-4 text-center">Add New Task</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Task Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Task Title *
          </label>
          <input
            {...register("title", { required: true })}
            id="title"
            type="text"
            placeholder="Enter task title"
            className="w-full px-2 py-3 border border-teal-700 focus:outline-teal-700 rounded mr-2"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Description *
          </label>
          <textarea
            {...register("description")}
            id="description"
            placeholder="Enter task description"
            className=" w-full px-2 py-5 border border-teal-700 focus:outline-teal-700 rounded mr-2"
          />
        </div>

        {/* Category Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Category *</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-2 py-3 border border-teal-700 focus:outline-teal-700 rounded mr-2"
          >
            <option value="To-Do">To-Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full p-2 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition duration-200"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
