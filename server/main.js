import { Meteor } from 'meteor/meteor';
import { UserCollection } from "../imports/api/UserCollection";

const insertUser = (user) => UserCollection.insert({
  ...user
});

Meteor.startup(() => {
  if(UserCollection.find().count() === 0) {
    [
      {
        nombre: "Lorem",
        apellido: "Ipsum",
        email: "lorem@ipsum.dolor",
        password: "loremipsum",
        telefono: "3126548890",
        cedula: "1234567890"
      }
    ].forEach(insertUser);
  }
});

export { insertUser }