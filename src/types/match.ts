import { ITeam } from './team'

export interface IMatch {
  id: string
  home: ITeam
  visitor: ITeam
  result: number[]
}

export interface IMatchWeek {
  id: string
  number: number
  matches: IMatch[]
}
