import React, { UseState } from "react";
import { FlowRouter } from "meteor/kadira:flow-router";

import { insert } from "../../api/TaskCollection";
import { updateTask } from "../../api/TaskCollection";
import { getTask } from "../../api/TaskCollection";

export const Form = ({_id}) => {
    this.state = {
        text: ""
    };
    if (_id) {
        task.text = getTask(_id)[0].text; 
    }
    const message = _id ? "Actualizar tarea" : "Registrar tarea";
    const guardar = () => {
        const text = document.getElementById("text");
        if(!text.value) {
            alert("Campo vacio");
            return;
        }
        if (_id) {
            updateTask({_id, text});
            text.value = "";
            FlowRouter.go("/");
        } else {
            insert(text.value);
            text.value = "";
            FlowRouter.go("/");
        }
    };

    const onHandlerInput = (event) => {
        task.text = event.target.value;
        console.log(task.text);
    }
    return (
        <div>
            <h1>{ message }</h1>
            <input type="text" name="text" id="text" onChange={onHandlerInput} value={task.text} required/>
            <button onClick={guardar}>Guardar</button>
        </div>
    );
};