import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { getTasks } from "../../api/TaskCollection";
import { FlowRouter } from "meteor/kadira:flow-router";

export const Task = () => {
    const tasks = useTracker(() => {
        return getTasks();
    });
    if (tasks.length !== 0) {
        return (
            <div>
                <a href={FlowRouter.path("/add")}>Agregar tareas</a>
                <ul>
                    {
                        tasks.map(task => (<li key={task._id}>{task.text} <a href={FlowRouter.path(`/update/${task._id}`)}>Edit</a></li>))
                    }
                </ul>
            </div>
        );
    } else {
        return (<p>No element</p>);
    }
};