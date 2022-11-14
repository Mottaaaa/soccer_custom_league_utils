import * as uuid from 'uuid'
import { ITeam } from '../types'

export const Team = (name: string = ''): ITeam => ({
  id: uuid.v4(),
  name,
})
