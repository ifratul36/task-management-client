
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Importing icons

const AllTasks = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  // Load tasks from the backend
  useEffect(() => {
    axiosSecure
      .get("/tasks")
      .then((res) => setTasks(res.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  // Handle task delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this task!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/tasks/${id}`)
          .then(() => {
            setTasks(tasks.filter((task) => task._id !== id));
            Swal.fire("Deleted!", "Your task has been deleted.", "success");
          })
          .catch((error) => console.error("Error deleting task:", error));
      }
    });
  };

  // Handle task edit (navigate to edit page)
  const handleEdit = (id) => {
    navigate(`/editTask/${id}`);
  };

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <h2 className="text-3xl font-bold  mb-6">All Tasks</h2>
      <div className="overflow-x-auto rounded-lg">
        <table className="table table-zebra w-full shadow-md ">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left font-medium">Title</th>
              <th className="px-6 py-3 text-left font-medium">Description</th>
              <th className="px-6 py-3 text-left font-medium">Category</th>
              <th className="px-6 py-3 text-left font-medium">Created At</th> {/* Added Timestamp Column */}
              <th className="px-6 py-3 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task._id}>
                <td className="px-6 py-3">{task.title}</td>
                <td className="px-6 py-3">{task.description || "N/A"}</td>
                <td className="px-6 py-3">{task.category}</td>
                <td className="px-6 py-3">
                  {/* Displaying the timestamp, formatted */}
                  {task.timestamp ? new Date(task.timestamp).toLocaleString() : "N/A"}
                </td>
                <td className="px-6 py-3 flex gap-4">
                  <button
                    onClick={() => handleEdit(task._id)}
                    className="btn btn-outline flex items-center gap-2"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="btn btn-outline flex items-center gap-2"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTasks;
