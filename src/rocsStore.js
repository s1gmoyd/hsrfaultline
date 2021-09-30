import { get, writable } from 'svelte/store';
import { websocket } from './rocsWs';

export const blueTeam = writable(null);
export const blueTeamLogo = writable("");

export const orangeTeam = writable(null);
export const orangeTeamLogo = writable("");

export const blueTeamPlayersBoolList = writable(null);
export const orangeTeamPlayersBoolList = writable(null);

export const blueTeamPrimaryColor = writable("#0073ff")
export const orangeTeamPrimaryColor = writable("#f48003")

export const startTime = writable("");
export const matchInfo = writable("");
export const matchFormat = writable("");
export const matchScores = writable(null)

export const casters = writable(null)
export const desk = writable(null)

export const schedule = writable(null)
export const onStream = writable(null)

export const leagueStandings = writable(null)
export const playoffBrackets = writable(null)

export function onOverlayloadMessage(data) {
  blueTeam.set(data.blueTeam)
  orangeTeam.set(data.orangeTeam)
  blueTeamLogo.set(data.blueTeamLogo)
  orangeTeamLogo.set(data.orangeTeamLogo)
  startTime.set(data.time);
  matchInfo.set(data.info);
  matchScores.set(data.scores)
  matchFormat.set(data.format)
  blueTeamPlayersBoolList.set(data.blueTeamStartingPlayers)
  orangeTeamPlayersBoolList.set(data.orangeTeamStartingPlayers)
  blueTeamPrimaryColor.set("#" + (data.blueTeamColorScheme ? data.blueTeamColorScheme.split("/")[0] : "0073ff"));
  orangeTeamPrimaryColor.set("#" + (data.orangeTeamColorScheme ? data.orangeTeamColorScheme.split("/")[0] : "f48003"));
  casters.set(data.casters)
  desk.set(data.desk);
  schedule.set(data.schedule)
  onStream.set(data.onStream)
  leagueStandings.set(data.groupStandings)
  playoffBrackets.set(data.playoffBrackets)
}

export function onMatchMessage(data) {
  blueTeam.set(data.blueTeam)
  orangeTeam.set(data.orangeTeam)
  blueTeamLogo.set(data.blueTeamLogo)
  orangeTeamLogo.set(data.orangeTeamLogo)
  startTime.set(data.time);
  matchInfo.set(data.info);
  matchScores.set(data.scores)
  matchFormat.set(data.format)
  blueTeamPlayersBoolList.set(data.blueTeamStartingPlayers)
  orangeTeamPlayersBoolList.set(data.orangeTeamStartingPlayers)
  blueTeamPrimaryColor.set("#" + (data.blueTeamColorScheme ? data.blueTeamColorScheme.split("/")[0] : "0073ff"));
  orangeTeamPrimaryColor.set("#" + (data.orangeTeamColorScheme ? data.orangeTeamColorScheme.split("/")[0] : "f48003"));
  leagueStandings.set(data.groupStandings)
}

export function onTalentMessage(data) {
  casters.set(data.casters)
  desk.set(data.desk);
}

export function onScheduleMessage(data) {
  schedule.set(data.schedule)
  onStream.set(data.onStream)
}

export function onLeaguesMessage(data) {
  leagueStandings.set(data.groupStandings)
}

export function onPlayoffsMessage(data) {
  playoffBrackets.set(data.playoffBrackets)
}