import * as uuid from 'uuid'
import { IMatch } from '../types'

type MatchProps = Omit<IMatch, 'id'>

export const Match = (props: MatchProps): IMatch => ({
  ...props,
  id: uuid.v4(),
})
