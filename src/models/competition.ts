import * as uuid from 'uuid'
import { ICompetition } from '../types'

export const Competition = (name: string = ''): ICompetition => ({
  id: uuid.v4(),
  name,
  running: false,
  teams: [],
  matchWeeks: [],
})
