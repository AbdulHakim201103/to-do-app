import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const TaskField = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://fast-savannah-48663.herokuapp.com/task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast("Task Create Successfully");
        
      });
  };
  return (
    <div className=" flex mx-auto w-6/12 my-14 justify-center items-center">
      <div class="card w-96 lg:w-full bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl">Add Task</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Task Name</span>
              </label>
              <input
                type="text"
                placeholder="Task  Name"
                className="input input-bordered w-full"
                {...register("taskName")}
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Task Description</span>
              </label>
              <textarea
                class="textarea textarea-bordered h-24"
                placeholder="Task Description"
                {...register("description")}
              ></textarea>
            </div>
            <input className="btn w-full my-4 " type="submit" value="Add Task" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskField;
