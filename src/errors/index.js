const IS_NOT_TEAM_LIST = 'Is not a team list';
const TEAM_LIST_IS_EMPTY = 'Team list is empty';
const TEAM_LIST_IS_NULL = 'Team list is null';
const TEAM_LIST_IS_NOT_EVEN = 'Team list is not even';

module.exports = {
    IS_NOT_TEAM_LIST: () => new Error(IS_NOT_TEAM_LIST),
    TEAM_LIST_IS_EMPTY: () => new Error(TEAM_LIST_IS_EMPTY),
    TEAM_LIST_IS_NULL: () => new Error(TEAM_LIST_IS_NULL),
    TEAM_LIST_IS_NOT_EVEN: () => new Error(TEAM_LIST_IS_NOT_EVEN),
};