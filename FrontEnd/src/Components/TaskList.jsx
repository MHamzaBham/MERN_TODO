import React, { useEffect, useState } from "react";
import Task from './Task'
import axios from 'axios'

export default function TaskList() {

    axios.defaults.withCredentials = true

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const loadData = (async () => {
            await axios.get("https://mern-todo-api-bay.vercel.app/gettasks")
            .then((data) => {
                setTasks(data.data)
            })
            .catch((err) => console.log(err))
        })
        loadData();
    })

    let count = 0;
    return (
        <>
            <div style={{ marginTop: "40px" }}>

                {
                    tasks.map((task) => {
                        if(!task.completed) {
                            count++;
                        }
                        return (
                            <>
                                <Task id={task._id} task={task.title} date={task.date} completed={task.completed}/>
                            </>
                        )
                    })
                }

            </div>

            <p>Number of remaining Tasks: {count}</p>
        </>
    )
}