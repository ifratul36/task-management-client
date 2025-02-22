// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import Swal from "sweetalert2";
// import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const Drag = () => {
//   const axiosSecure = useAxiosSecure();
//   const navigate = useNavigate();
//   const [tasks, setTasks] = useState({
//     todo: [],
//     inProgress: [],
//     done: [],
//   });

//   useEffect(() => {
//     axiosSecure
//       .get("/tasks")
//       .then((res) => {
//         const categorizedTasks = {
//           todo: res.data.filter((task) => task.category === "To-Do"),
//           inProgress: res.data.filter((task) => task.category === "In Progress"),
//           done: res.data.filter((task) => task.category === "Done"),
//         };
//         setTasks(categorizedTasks);
//       })
//       .catch((error) => console.error("Error fetching tasks:", error));
//   }, []);

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to recover this task!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosSecure.delete(`/tasks/${id}`).then(() => {
//           setTasks((prevState) => {
//             const newTasks = { ...prevState };
//             for (let key in newTasks) {
//               newTasks[key] = newTasks[key].filter((task) => task._id !== id);
//             }
//             return newTasks;
//           });
//           Swal.fire("Deleted!", "Your task has been deleted.", "success");
//         }).catch((error) => console.error("Error deleting task:", error));
//       }
//     });
//   };

//   const handleEdit = (id) => {
//     navigate(`/editTask/${id}`);
//   };

//   const handleOnDragEnd = (result) => {
//     const { source, destination, draggableId } = result;
//     if (!destination) return;
//     if (source.droppableId === destination.droppableId && source.index === destination.index) {
//       return;
//     }

//     const sourceCategory = source.droppableId;
//     const destinationCategory = destination.droppableId;

//     const draggedTask = tasks[sourceCategory].find((task) => task._id === draggableId);
//     const sourceCategoryTasks = tasks[sourceCategory].filter((task) => task._id !== draggableId);
//     const destinationCategoryTasks = [...tasks[destinationCategory]];
//     destinationCategoryTasks.splice(destination.index, 0, draggedTask);

//     setTasks((prevState) => ({
//       ...prevState,
//       [sourceCategory]: sourceCategoryTasks,
//       [destinationCategory]: destinationCategoryTasks,
//     }));

//     axiosSecure.put(`/tasks/${draggableId}`, { category: destinationCategory })
//       .catch((error) => console.error("Error updating task:", error));
//   };

//   return (
//     <div className="container mx-auto p-6 max-w-7xl dark:bg-gray-800">
//       <h2 className="text-3xl font-bold mb-6">Drag & Drop</h2>

//       <DragDropContext onDragEnd={handleOnDragEnd}>
//         <div className="flex gap-6">
//           {["todo", "inProgress", "done"].map((category) => (
//             <Droppable key={category} droppableId={category}>
//               {(provided) => (
//                 <div
//                   className="w-1/3 mx-auto p-4 border rounded shadow-lg"
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                 >
//                   <h3 className="font-bold text-lg mb-4">


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Drag = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    done: [],
  });

  useEffect(() => {
    axiosSecure
      .get("/tasks")
      .then((res) => {
        const categorizedTasks = {
          todo: res.data.filter((task) => task.category === "To-Do"),
          inProgress: res.data.filter((task) => task.category === "In Progress"),
          done: res.data.filter((task) => task.category === "Done"),
        };
        setTasks(categorizedTasks);
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

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
        axiosSecure.delete(`/tasks/${id}`).then(() => {
          setTasks((prevState) => {
            const newTasks = { ...prevState };
            for (let key in newTasks) {
              newTasks[key] = newTasks[key].filter((task) => task._id !== id);
            }
            return newTasks;
          });
          Swal.fire("Deleted!", "Your task has been deleted.", "success");
        }).catch((error) => console.error("Error deleting task:", error));
      }
    });
  };

  const handleEdit = (id) => {
    navigate(`/editTask/${id}`);
  };

  const handleOnDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return; // No drop destination

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return; // If the task was dropped in the same place
    }

    // Extract the task and its current category
    const draggedTask = tasks[source.droppableId].find((task) => task._id === draggableId);
    const sourceCategoryTasks = tasks[source.droppableId].filter((task) => task._id !== draggableId);
    const destinationCategoryTasks = [...tasks[destination.droppableId]];

    // Insert the dragged task into the new category
    destinationCategoryTasks.splice(destination.index, 0, draggedTask);

    // Update state with new task order
    setTasks((prevState) => ({
      ...prevState,
      [source.droppableId]: sourceCategoryTasks,
      [destination.droppableId]: destinationCategoryTasks,
    }));

    // Update task category on the server
    axiosSecure.put(`/tasks/${draggableId}`, { category: destination.droppableId })
      .catch((error) => console.error("Error updating task:", error));
  };

  return (
    <div className="container mx-auto p-6 max-w-7xl dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-6">Drag & Drop</h2>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="flex gap-6">
          {["todo", "inProgress", "done"].map((category) => (
            <Droppable key={category} droppableId={category}>
              {(provided) => (
                <div
                  className="w-1/3 mx-auto p-4 border rounded shadow-lg"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h3 className="font-bold text-lg mb-4">
                    {category === "to-do" ? "To-Do" : category === "In Progress" ? "In Progress" : "Done"}
                  </h3>
                  {tasks[category].map((task, index) => (
                    <Draggable key={task._id} draggableId={task._id} index={index}>
                      {(provided) => (
                        <div
                          className="mb-4 p-4 rounded border border-[#55ccd0] shadow-lg text-center"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <h4 className="font-semibold text-xl">{task.title}</h4>
                          <p>{task.description || "No Description"}</p>
                          <p className="text-sm ">
                            {new Date(task.timestamp).toLocaleString()}
                          </p>
                          <div className="flex justify-center gap-4 mt-2">
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
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Drag;
