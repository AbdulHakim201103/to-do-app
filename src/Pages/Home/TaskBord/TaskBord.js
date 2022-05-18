import React from "react";
import { toast } from "react-toastify";
import useTasks from "../../../hooks/useTasks";

const TaskBord = () => {
  const [tasks, setTasks] = useTasks([]);

  const handleDelete = (id) => {
    console.log(id);
    const confirm = window.confirm("Are you Sure?");
    if (confirm) {
      const url = `https://fast-savannah-48663.herokuapp.com/tasks/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Tasks Delete Successfully");
          const remaining = tasks.filter((task) => task._id !== id);
          setTasks(remaining);
        });
    }
  };
  return (
    <div className="container mx-auto my-14">
      <h1 className="text-center text-red-500 text-5xl">Tasks</h1>
      <div>
        <div class="overflow-x-auto my-10">
          <table class="table table-zebra w-full">
            <thead>
              <tr className="">
                <th>No</th>
                <th>Task Name</th>
                <th>Description</th>
                <th>Delete</th>
              </tr>
            </thead>
            {tasks.map((task, index) => (
              <tbody>
                <tr>
                  <th>{index + 1}</th>
                  <td>{task.taskName}</td>
                  <td className='break-normal' title={task.description}>{task.description.slice(0,50)}</td>
                  <td>
                    <button onClick={() => handleDelete(task._id)} class="btn text-red-500 btn-ghost">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskBord;
