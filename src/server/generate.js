module.exports = function () {
  const faker = require('faker');
  const times = require('lodash.times');
  return {
    users: times(10, function (index) {
      return {
        id: index + 1,
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
        password: faker.internet.password(),
        createdAt: faker.date.past(),
      };
    }),
  };
};
