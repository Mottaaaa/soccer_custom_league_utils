import { errorCases } from '../errors'
import { ITeam } from '../types'

export const validateTeamList = (teams: ITeam[]): void => {
  Object.keys(errorCases).map((key) => errorCases[key]).forEach((value) => {
    if(value.premise(teams)){
      value.error()
    }
  })
}
