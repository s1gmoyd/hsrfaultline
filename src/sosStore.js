import { get, writable } from 'svelte/store';
import { websocket } from './sosWs';

export const data = writable(null);
export const blueScore = writable(0);
export const orangeScore = writable(0);
export const time = writable(300);
export const ot = writable(false);

export const countdownStarted = writable(false)
export const showScoreline = writable(false)

export const players = writable(null);
export const bluePlayers = writable(null);
export const orangePlayers = writable(null);

export const showGoalOverlay = writable(false);
export const goalScorer = writable(null)
export const goalAssister = writable(null)
export const goalSpeed = writable(0)
export const goalTeam = writable(null)

export const showAllBoost = writable(false);
export const spectatedPlayer = writable(null);

export const lastStatfeedEvent = writable(null);

export const showSpectatedPlayer = writable(false);

export const inReplay = writable(false);

export const showGoalTransition = writable(false);

export function OnUpdateStateMessage(data) {
  blueScore.set(data.game.teams[0].score)
  orangeScore.set(data.game.teams[1].score)
  time.set(data.game.time)
  ot.set(data.game.isOT);
  players.set(data.players)
  
  let bluePlayersObj = {}
  let orangePlayersObj = {}
  for (let playerId in data.players) {
    if (data.players[playerId].team == 0) {
      bluePlayersObj[playerId] = data.players[playerId]
    } else {
      orangePlayersObj[playerId] = data.players[playerId]
    }
  }
  bluePlayers.set(bluePlayersObj)
  orangePlayers.set(orangePlayersObj);
  spectatedPlayer.set(data.game.hasTarget ? data.players[data.game.target] : null)
  showSpectatedPlayer.set(data.game.hasTarget)
}

export function OnPreCountdownBeginMessage(data) {
  countdownStarted.set(true);
  setTimeout(() => {
    showScoreline.set(true);
    showAllBoost.set(true);
    countdownStarted.set(false);
  }, 3000);
}

export function OnMatchEndedMessage(data) {
  setTimeout(() => {
    showScoreline.set(false);
    showAllBoost.set(false);
  }, 1000)
}

export function onGoalScoredMessage(data) {
  goalScorer.set(get(players)[data.scorer.id])
  if (data.assister.id != "") {
    goalAssister.set(get(players)[data.assister.id])
  }
  goalSpeed.set(data.goalspeed)
  goalTeam.set(data.scorer.teamnum)
  
  setTimeout(() => {
    showGoalTransition.set(true)
  }, 2000)
  setTimeout(() => {
    showGoalTransition.set(false)
  }, 6000)
}

export function onReplayStartMessage(data) {
  showGoalOverlay.set(true)
  inReplay.set(true)
}

export function onReplayWillEndMessage(data) {
  setTimeout(() => {
    showGoalTransition.set(true)
  }, 1250)
  setTimeout(() => {
    showGoalTransition.set(false)
  }, 6000)
}

export function onReplayEndMessage(data) {
  showGoalOverlay.set(false)
  goalScorer.set(null)
  goalAssister.set(null)
  goalSpeed.set(0)
  goalTeam.set(null)
  inReplay.set(false);
}

export function onStatfeedEventMessage(data) {
  lastStatfeedEvent.set(data)
}