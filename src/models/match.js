const uuid = require('uuid');

const Match = ({ home, visitor, result }) => ({
    id: uuid.v4(),
    home,
    visitor,
    result,
});

module.exports = Match;