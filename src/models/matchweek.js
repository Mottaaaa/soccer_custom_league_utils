const uuid = require('uuid');

const MatchWeek = ({ number, matches = [] }) => ({
    id: uuid.v4(),
    number,
    matches,
});

module.exports = MatchWeek;