import { Team, Competition } from './models';
import { ICompetition, IMatchWeek, ITeam } from './types';
import * as Scheduler from './utils/scheduler';

export * from './models';
export * from './types';

export const createCompetition = ({
  teamNames,
  competitionName,
}: {
  teamNames: string[];
  competitionName: string;
}): ICompetition => {
  // Create a competition
  const competition = Competition(competitionName);

  // Create the teams
  const teams: ITeam[] = teamNames.map((name) => Team(name));

  // Schedule the games
  const matchWeeks: IMatchWeek[] = Scheduler.scheduleMatches(teams);

  return {
    ...competition,
    running: true,
    teams,
    matchWeeks,
  };
};
