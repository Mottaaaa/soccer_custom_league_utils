import { errorCases } from '../errors'

export const validateTeamList = (teams: string[]): void => {
  Object.keys(errorCases).map((key) => errorCases[key]).forEach((value) => {
    if(value.premise(teams)){
      value.error()
    }
  })
}
