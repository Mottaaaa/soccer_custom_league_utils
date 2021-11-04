const errors = require('../errors');

const validateTeamList = (teams) => {
    if (!teams) throw new errors.TEAM_LIST_IS_NULL;
    if (!Array.isArray(teams)) throw errors.IS_NOT_TEAM_LIST;
    if (teams.length <= 0) throw errors.TEAM_LIST_IS_EMPTY;
    if(teams.length % 2 !== 0) throw errors.TEAM_LIST_IS_NOT_EVEN;
}

module.exports = {
    validateTeamList
};
