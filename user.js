function makeHash(toHash) {
  // mock password hashing algo
  return '#####' + toHash;
}

function makeUser({ id, username, password, dateCreated, dateModified } = {}) {
  return Object.freeze({
    id,
    username,
    password: makeHash(password),
    dateCreated,
    dateModified,
  });
}

module.exports = {
  makeUser,
};
