import { FlowRouter } from "meteor/kadira:flow-router";
import React from "react";
import { mount } from "react-mounter";

import { App } from "./App";
import { Task } from "./components/Task";
import { Form } from "./components/Form";

FlowRouter.route("/", {
    name: "home",
    action() {
        mount(App, {
            content: <Task/>
        })
    }
});

FlowRouter.route("/add", {
    name: "add",
    action(params) {
        mount(App, {
            content: <Form/>
        })
    }
});

FlowRouter.route("/update/:_id", {
    name: "update",
    action(params) {
        mount(App, {
            content: <Form  _id={params._id}/>
        })
    }
})