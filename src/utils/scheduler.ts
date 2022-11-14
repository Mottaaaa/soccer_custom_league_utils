import { Match, MatchWeek } from '../models'
import { IMatchWeek, ITeam } from '../types'
import { validateTeamList } from './validator'

export const scheduleMatches = (teams: ITeam[]): IMatchWeek[] => {
  validateTeamList(teams)
  let matchweeks = []

  let numberOfTeams = teams.length
  let matchesPerRound = numberOfTeams / 2
  let numberOfRounds = (numberOfTeams - 1) * 2
  let midSeason = numberOfRounds / 2
  let teamList = teams
  let lastTeam = teams[numberOfTeams - 1]

  for (let i = 0; i < midSeason; i++) {
    let matchWeek = MatchWeek({ number: i + 1, matches: [] })
    matchweeks.push(matchWeek)

    if (i === 0) {
      for (let j = 0; j < matchesPerRound; j++) {
        matchWeek.matches.push(
          Match({
            home: teamList[j],
            visitor: teamList[numberOfTeams - 1 - j],
            result: []
          })
        )
      }
    } else {
      let previousMatchWeek = matchweeks[i - 1]
      let previousMatchWeekLastTeam =
        previousMatchWeek.matches[matchesPerRound - 1].visitor
      let temp = []
      for (let match of previousMatchWeek.matches) {
        temp.push(match.home)
        temp.push(match.visitor)
      }

      temp = temp.filter(
        (value, index, arr) =>
          value.id !== previousMatchWeekLastTeam.id && value.id !== lastTeam.id
      )

      if (i % 2 === 0) {
        matchWeek.matches.push(
          Match({ home: previousMatchWeekLastTeam, visitor: lastTeam, result: [] })
        )
        temp.unshift(previousMatchWeekLastTeam, lastTeam)
      } else {
        matchWeek.matches.push(
          Match({ home: lastTeam, visitor: previousMatchWeekLastTeam, result: [] })
        )
        temp.unshift(lastTeam, previousMatchWeekLastTeam)
      }
      for (let j = 0; j < matchesPerRound - 1; j++) {
        let visitor = temp.pop()
        let home = temp.pop()
        matchWeek.matches.push(Match({ home, visitor, result: [] }))
        temp.unshift(home, visitor)
      }
    }
  }

  for (let i = 0; i < midSeason; i++) {
    let matchWeekIndex = midSeason + i + 1
    let matchWeek = MatchWeek({ number: matchWeekIndex, matches: [] })
    matchweeks.push(matchWeek)

    for (let j = 0; j < matchesPerRound; j++) {
      let match = matchweeks[i].matches[j]
      matchWeek.matches.push(
        Match({ home: match.visitor, visitor: match.home, result: [] })
      )
    }
  }

  return matchweeks
}
