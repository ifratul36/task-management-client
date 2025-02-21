import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editTask, setEditTask] = useState("");
  const [editDueDate, setEditDueDate] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskItem = {
        task: newTask,
        dueDate: dueDate,
      };
      setTasks([...tasks, newTaskItem]);
      setNewTask("");
      setDueDate("");
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditingIndex(index);
    setEditTask(tasks[index].task);
    setEditDueDate(tasks[index].dueDate);
  };

  const handleUpdateTask = () => {
    if (editTask.trim() !== "") {
      const updatedTasks = tasks.map((task, index) =>
        index === editingIndex ? { task: editTask, dueDate: editDueDate } : task
      );
      setTasks(updatedTasks);
      setEditingIndex(-1);
      setEditTask("");
      setEditDueDate("");
    }
  };

  const formatDate = (date) => {
    const [month, day, year] = new Date(date).toLocaleDateString().split("/");
    return `${day}-${month}-${year.slice(-2)}`;
  };

  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-4 border rounded shadow-lg">
        <h1 className="text-2xl mb-4 text-center">Todo List</h1>

        <div className="flex">
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Enter new task..."
            className="flex-grow px-2 py-1 border border-blue-700 focus:outline-blue-700 rounded mr-2"
          />

          <input
            type="date"
            value={dueDate}
            onChange={handleDueDateChange}
            placeholder="Due date"
            className="px-2 py-1 border border-blue-700 focus:outline-blue-700 rounded mr-2"
          />

          <button
            onClick={handleAddTask}
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            Add Task
          </button>
        </div>
      </div>

      {/* Tasks Table */}

      <div className="max-w-2xl mx-auto mt-10 p-2 border rounded shadow-lg border-blue-700">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-lg pl-20">Tasks</th>
              <th className="pl-52 text-lg">Due Date</th>
              <th className="pl-28 text-lg">Action</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="border-b">
                <td className="pl-3">
                  {editingIndex === index ? (
                    <textarea
                      value={editTask}
                      onChange={(e) => setEditTask(e.target.value)}
                      className="flex-grow px-2 py-1 border rounded mr-2 border-blue-500 focus:outline-blue-600"
                    ></textarea>
                  ) : (
                    task.task
                  )}
                </td>

                <td className="pl-10">
                  {editingIndex === index ? (
                    <input
                      type="date"
                      value={editDueDate}
                      onChange={(e) => setEditDueDate(e.target.value)}
                      className="py-1 px-1 border border-blue-700 focus:outline-blue-700 rounded"
                    />
                  ) : (
                    formatDate(task.dueDate)
                  )}
                </td>

                <td className="pl-10">
                  {editingIndex === index ? (
                    <button
                      onClick={handleUpdateTask}
                      className="bg-green-600 text-white px-2 py-1 rounded mr-3"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEditTask(index)}
                      className="bg-yellow-600 text-white px-2 py-1 rounded mr-3"
                    >
                      Edit
                    </button>
                  )}

                  <button
                    onClick={() => handleRemoveTask(index)}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Todo;
