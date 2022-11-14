import { IErrorCase } from '../types'

export enum EError {
  IS_NOT_TEAM_LIST = 'Is not a team list',
  TEAM_LIST_IS_EMPTY = 'Team list is empty',
  TEAM_LIST_IS_NULL = 'Team list is null',
  TEAM_LIST_IS_NOT_EVEN = 'Team list is not even',
}

export const errorCases: Record<EError, IErrorCase> = {
  [EError.TEAM_LIST_IS_NULL]: {
    premise: (teams) => !teams,
    error: () => {
      throw new Error(EError.TEAM_LIST_IS_NULL)
    },
  },
  [EError.IS_NOT_TEAM_LIST]: {
    premise: (teams) => !Array.isArray(teams),
    error: () => {
      throw new Error(EError.IS_NOT_TEAM_LIST)
    },
  },
  [EError.TEAM_LIST_IS_EMPTY]: {
    premise: (teams) => teams.length <= 0,
    error: () => {
      throw new Error(EError.TEAM_LIST_IS_EMPTY)
    },
  },
  [EError.TEAM_LIST_IS_NOT_EVEN]: {
    premise: (teams) => teams.length % 2 !== 0,
    error: () => {
      throw new Error(EError.TEAM_LIST_IS_NOT_EVEN)
    },
  },
}
