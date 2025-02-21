import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [task, setTask] = useState({ title: "", description: "", category: "" });

  useEffect(() => {
    axiosSecure
      .get(`/tasks/${id}`)
      .then((res) => setTask(res.data))
      .catch((error) => console.error("Error fetching task:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axiosSecure
      .put(`/tasks/${id}`, task)
      .then(() => {
        Swal.fire("Updated!", "Task updated successfully.", "success");
        navigate("/tasks");
      })
      .catch((error) => console.error("Error updating task:", error));
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Edit Task</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Task Title"
          required
        />
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Task Description"
        ></textarea>
        <input
          type="text"
          name="category"
          value={task.category}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Category"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTask;
