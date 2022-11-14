import * as uuid from 'uuid'
import { IMatchWeek } from '../types'

type MatchWeekProps = Omit<IMatchWeek, 'id'>

export const MatchWeek = (props: MatchWeekProps): IMatchWeek => ({
  ...props,
  id: uuid.v4(),
})
