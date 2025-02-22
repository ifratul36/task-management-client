// // import React, { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import useAxiosSecure from "../../hooks/useAxiosSecure";
// // import Swal from "sweetalert2";

// // const EditTask = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const axiosSecure = useAxiosSecure();
// //   const [task, setTask] = useState({ title: "", description: "", category: "" });

// //   useEffect(() => {
// //     axiosSecure
// //       .get(`/tasks/${id}`)
// //       .then((res) => setTask(res.data))
// //       .catch((error) => console.error("Error fetching task:", error));
// //   }, [id]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setTask({ ...task, [name]: value });
// //   };

// //   const handleUpdate = (e) => {
// //     e.preventDefault();
// //     axiosSecure
// //       .put(`/tasks/${id}`, task)
// //       .then(() => {
// //         Swal.fire("Updated!", "Task updated successfully.", "success");
// //         navigate("/allTasks");
// //       })
// //       .catch((error) => console.error("Error updating task:", error));
// //   };

// //   return (
// //     <div className="container mx-auto p-6">
// //       <h2 className="text-2xl font-semibold mb-4">Edit Task</h2>
// //       <form onSubmit={handleUpdate} className="space-y-4">
// //         <input
// //           type="text"
// //           name="title"
// //           value={task.title}
// //           onChange={handleChange}
// //           className="w-full p-2 border border-gray-300 rounded"
// //           placeholder="Task Title"
// //           required
// //         />
// //         <textarea
// //           name="description"
// //           value={task.description}
// //           onChange={handleChange}
// //           className="w-full p-2 border border-gray-300 rounded"
// //           placeholder="Task Description"
// //         ></textarea>




// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import Swal from "sweetalert2";

// const EditTask = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const axiosSecure = useAxiosSecure();
//   const [task, setTask] = useState({ title: "", description: "", category: "", timestamp: "" });
//   const [originalTask, setOriginalTask] = useState({ title: "", description: "", category: "", timestamp: "" }); // Store original task data
//   const [categories] = useState(["Work", "Personal", "Urgent", "Others"]); // Example categories

//   useEffect(() => {
//     // Fetch the task details to edit
//     axiosSecure
//       .get(`/tasks/${id}`)
//       .then((res) => {
//         const fetchedTask = res.data;
//         setTask({
//           ...fetchedTask,
//           timestamp: new Date().toISOString(), // Add the current timestamp when loading the task
//         });
//         setOriginalTask(fetchedTask); // Save the original task data
//       })
//       .catch((error) => console.error("Error fetching task:", error));
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTask({ ...task, [name]: value });
//   };

//   const handleUpdate = (e) => {
//     e.preventDefault();

//     // Show the changed values to the user before updating
//     const changes = {};
//     for (const key in task) {
//       if (task[key] !== originalTask[key]) {
//         changes[key] = {
//           original: originalTask[key],
//           updated: task[key],
//         };
//       }
//     }

//     if (Object.keys(changes).length > 0) {
//       Swal.fire({
//         title: "Confirm Task Update",
//         html: Object.entries(changes).map(
//           ([key, { original, updated }]) => `<strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong><br>Original: ${original}<br>Updated: ${updated}<br><br>`
//         ).join(''),
//         showCancelButton: true,
//         confirmButtonText: "Update",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           // Proceed with the update if confirmed
//           axiosSecure
//             .put(`/tasks/${id}`, {
//               ...task,
//               timestamp: new Date().toISOString(), // Update the timestamp when editing
//             })
//             .then(() => {
//               Swal.fire("Updated!", "Task updated successfully.", "success");
//               navigate("/allTasks");
//             })
//             .catch((error) => console.error("Error updating task:", error));
//         }
//       });
//     } else {
//       Swal.fire("No Changes", "No changes were made to the task.", "info");
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-2xl font-semibold mb-4">Edit Task</h2>
//       <form onSubmit={handleUpdate} className="space-y-4">
//         <input
//           type="text"
//           name="title"
//           value={task.title}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded"
//           placeholder="Task Title"
//           required
//         />
//         <textarea
//           name="description"
//           value={task.description}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded"
//           placeholder="Task Description"
//         ></textarea>
        
//         {/* Category Selection */}
//         <select
//           name="category"
//           value={task.category}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded"
//         >
//           {categories.map((category) => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>

//         <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
//           Update Task
//         </button>
//       </form>

//       <div className="mt-4">
//         <p><strong>Last Edited: </strong>{task.timestamp ? new Date(task.timestamp).toLocaleString() : "Not available"}</p>
//       </div>
//     </div>
//   );
// };

// export default EditTask;



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [task, setTask] = useState({ title: "", description: "", category: "To-Do" });

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

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosSecure.put(`/tasks/${id}`, { ...task, timestamp: new Date().toISOString() });
      if (response.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Task Updated Successfully",
          text: `Your task '${task.title}' has been updated.`,
        });
        navigate("/allTasks");
      }
    } catch (error) {
      console.error("Error updating task:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to Update Task",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 border rounded shadow-lg my-14">
      <h2 className="text-xl font-semibold mb-4 text-center">Edit Task</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        {/* Task Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Task Title *
          </label>
          <input
            name="title"
            type="text"
            value={task.title}
            onChange={handleChange}
            className="w-full px-2 py-3 border border-teal-700 focus:outline-teal-700 rounded"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Description *
          </label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            className="w-full px-2 py-5 border border-teal-700 focus:outline-teal-700 rounded"
          />
        </div>

        {/* Category Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Category *</label>
          <select
            name="category"
            value={task.category}
            onChange={handleChange}
            className="w-full px-2 py-3 border border-teal-700 focus:outline-teal-700 rounded"
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
            Update Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
