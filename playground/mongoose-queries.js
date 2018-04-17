const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5ad5daa5adfb854961661ded';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found!');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});

// var id = '5ad6492b2447f46718e578588';

// if (!ObjectID.isValid(id)) {
//   console.log('ID is not valid');
// };

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   // console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));