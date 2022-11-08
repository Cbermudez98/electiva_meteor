import { Mongo, ObjectId } from "meteor/mongo";

export const TaskCollection = new Mongo.Collection("tasks");

export const insert = (data) => TaskCollection.insert({
    text: data
});

export const getTasks = () => TaskCollection.find({}).fetch();

export const getTask = (_id) => TaskCollection.find({_id}).fetch();

export const updateTask = ({_id, text}) => TaskCollection.update({_id}, {
    $set: {
        text
    }
});