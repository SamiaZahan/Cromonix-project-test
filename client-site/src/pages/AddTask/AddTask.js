import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddTask = () => {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post('http://localhost:5000/tasks',data)
        .then(res => {
            console.log(res)
            reset();
            alert('Task added Succesfully')
        })
    }
     
    return (
        <div className="add-task">
            <h2>Add a Task</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="add-form">
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Service Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddTask;