import { Mongo, ObjectId } from "meteor/mongo";

export const UserCollection = new Mongo.Collection("users");

export const insert = (user) => UserCollection.insert({
    ...user
});

export const getUsers = () => UserCollection.find({}).fetch();

export const getUser = (_id) => UserCollection.find({_id}).fetch();

export const updateUser = ({_id, user}) => UserCollection.update({_id}, {
    $set: {
        user
    }
});