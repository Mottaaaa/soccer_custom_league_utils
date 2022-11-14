import { IMatchWeek, ITeam } from '.'

export interface ICompetition {
  id: string
  name: string
  running: boolean
  teams: ITeam[]
  matchWeeks: IMatchWeek[]
}
