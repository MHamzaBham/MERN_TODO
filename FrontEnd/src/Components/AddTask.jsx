import React, { useState } from "react";
import axios from 'axios'

export default function AddTask() {

    let [taskToAdd, setTaskToAdd] = useState("")

    async function addTask(e) {
        e.preventDefault();
        if (!(taskToAdd === null || taskToAdd.match(/^ *$/) !== null)) {
            await axios.post("http://localhost:8000/addtask", { title: taskToAdd, date: Date() })
                .then(task => console.log(task))
                .catch(err => console.log(err))
            setTaskToAdd("")
        }
    }

    return (
        <>
            <div className="addtask-parent" onSubmit={addTask} style={{ marginTop: "40px" }}>
                <form>
                    <input type="text" value={taskToAdd} placeholder="Add Task" onChange={(e) => setTaskToAdd(e.target.value)}></input>
                    <button type="submit" className="btn"> Add Task</button>
                </form>
            </div>
        </>
    )
}