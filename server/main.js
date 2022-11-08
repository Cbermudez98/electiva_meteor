import { Meteor } from 'meteor/meteor';
import { TaskCollection } from "../imports/api/TaskCollection";

const inserText = (taskText) => TaskCollection.insert({
  text: taskText
});

Meteor.startup(() => {
  if(TaskCollection.find().count() === 0) {
    [
      "first task",
      "second task",
      "third task"
    ].forEach(inserText);
  }
});

export { inserText }