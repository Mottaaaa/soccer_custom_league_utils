const uuid = require('uuid');

const Team = (name = '') => ({
    id: uuid.v4(),
    name: name,
});

module.exports = Team;