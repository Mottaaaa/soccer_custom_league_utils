const uuid = require('uuid');

const Competition = ({ name = '' }) => ({
    id: uuid.v4(),
    name,
    running: false,
    teams: [],
    matchWeeks: [],
});

module.exports = Competition;