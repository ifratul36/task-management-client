
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

// const AddTask = () => {
//   const { register, handleSubmit, reset } = useForm();
//   const [category, setCategory] = useState("To-Do"); // Default category
//   const axiosSecure = useAxiosSecure();


//   // Submit function for adding a task
//   const onSubmit = async (data) => {
//     try {
//       const taskData = {
//         title: data.title,
//         description: data.description || "No description provided", // Default description
//         category,
//       };

//       // Sending data to backend API
//       const response = await axiosSecure.post("/tasks", taskData);

//       if (response.data.insertedId) {
//         Swal.fire({
//           icon: "success",
//           title: "Task Added Successfully",
//           text: `Your new task '${data.title}' has been added.`,
//         });

//         reset(); // Reset form fields
//         setCategory("To-Do"); // Reset category
//       }
//     } catch (error) {
//       console.error("Error adding task:", error);
//       Swal.fire({
//         icon: "error",
//         title: "Failed to Add Task",
//         text: "Something went wrong. Please try again later.",
//       });
//     }
//   };

//   return (
//     <div className="ml-8 mx-auto">
//       <div className="bg-gray-50 px-14 py-14 rounded-lg shadow m-4">
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* Task Title */}
//           <div>
//             <label htmlFor="title" className="block text-sm font-medium mb-1">
//               Task Title *
//             </label>
//             <input
//               {...register("title", { required: true })}
//               id="title"
//               type="text"
//               placeholder="Enter task title"
//               className="input input-bordered w-full"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label htmlFor="description" className="block text-sm font-medium mb-1">
//               Description (Optional)
//             </label>
//             <textarea
//               {...register("description")}
//               id="description"
//               placeholder="Enter task description"
//               className="textarea textarea-bordered w-full"
//             />
//           </div>

//           {/* Category Selection */}
//           <div className="flex gap-4">
//             <div className="flex-1">
//               <label className="block text-sm font-medium mb-1">Category *</label>
//               <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 className="select select-bordered w-full"
//               >
//                 <option value="To-Do">To-Do</option>
//                 <option value="In Progress">In Progress</option>
//                 <option value="Done">Done</option>
//               </select>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button type="submit" className="btn bg-blue-950 text-white w-full">
//               Add Task
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddTask;



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
    <div className="ml-8 mx-auto">
      <div className="bg-gray-50 px-14 py-14 rounded-lg shadow m-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Task Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Task Title *
            </label>
            <input
              {...register("title", { required: true })}
              id="title"
              type="text"
              placeholder="Enter task title"
              className="input input-bordered w-full"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">
              Description (Optional)
            </label>
            <textarea
              {...register("description")}
              id="description"
              placeholder="Enter task description"
              className="textarea textarea-bordered w-full"
            />
          </div>

          {/* Category Selection */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="select select-bordered w-full"
              >
                <option value="To-Do">To-Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="btn bg-blue-950 text-white w-full">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
