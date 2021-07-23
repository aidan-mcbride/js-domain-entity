// SOME ARBITRARY BUSINESS RULES
// - username must be provided.
// - username must be between 5 and 30 characters long.
// - password must be provided.
// - id must exist.

function makeHash(toHash) {
  // mock password hashing algo
  return '#####' + toHash;
}

function makeId() {
  return Math.random() * 1000000;
}

function makeUser({
  id = makeId(),
  username,
  password,
  dateCreated = Date.now(),
  dateModified = Date.now(),
} = {}) {
  if (!id) {
    throw new Error('Id required');
  }
  if (!username) {
    throw new Error('Username required');
  }
  if (username.length < 5) {
    throw new Error('Username must be at least 5 characters long');
  }
  if (username.length > 30) {
    throw new Error('Username must be no longer than 30 characters');
  }
  if (!password) {
    throw new Error('Password required');
  }
  let hashedPassword;

  return Object.freeze({
    getId: () => id,
    getUsername: () => username,
    getPassword: () => hashedPassword || (hashedPassword = makeHash(password)),
    getDateCreated: () => dateCreated,
    getDateModified: () => dateModified,
  });
}

module.exports = {
  makeUser,
};
