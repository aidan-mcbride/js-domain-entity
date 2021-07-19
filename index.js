// TESTING, for now

const { makeUser } = require('./user');

const newUserData = {
  username: 'Marco',
  password: 'Polo',
};

const newUser = makeUser(newUserData);

console.log('new user:', newUser);
newUser.username = 'setFromOutside!';
console.log(newUser);
