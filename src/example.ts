import { createCompetition } from '.';
import { ICompetition } from './types';

// Create team names
const teamNames = ['Team A', 'Team B', 'Team C', 'Team D'];

// Create a Competition
const competition: ICompetition = createCompetition({
  teamNames,
  competitionName: 'Custom League',
});

// You can see each match week in the competition
console.log(competition.matchWeeks);
