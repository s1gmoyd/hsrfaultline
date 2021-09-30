import { amp, browser, dev, mode, prerendering } from '$app/env';
import { get, writable } from 'svelte/store';
import { OnUpdateStateMessage, OnPreCountdownBeginMessage, OnMatchEndedMessage, 
  onGoalScoredMessage, onReplayStartMessage, onReplayEndMessage, onStatfeedEventMessage, onReplayWillEndMessage } from './sosStore';

export const isBrowser = writable(browser);
export const websocket = writable(null)

isBrowser.subscribe((newIsBrowser) => {
  if (newIsBrowser) {
    let ws = new WebSocket("ws://localhost:49322");

    function registerEvent(channel, event) {
      if (ws.OPEN) {
        ws.send(JSON.stringify({
          "event": "wsRelay:register",
          "data": `${channel}:${event}`
        }))
      }
    }

    ws.onopen = (event) => {
      registerEvent("game", "update_state");
      registerEvent("game", "pre_countdown_begin")
      registerEvent("game", "match_ended")
      registerEvent("game", "goal_scored")
      registerEvent("game", "replay_start")
      registerEvent("game", "replay_will_end")
      registerEvent("game", "replay_end")
      registerEvent("game", "statfeed_event")
    }

    ws.onmessage = ({data}) => {
      let dataObj = JSON.parse(data);
      switch (dataObj.event.split(":")[1]) {
        case "update_state":
          OnUpdateStateMessage(dataObj.data)
          break;
        case "pre_countdown_begin":
          OnPreCountdownBeginMessage(dataObj.data)
          break;
        case "match_ended":
          OnMatchEndedMessage(dataObj.data)
          break;
        case "goal_scored":
          onGoalScoredMessage(dataObj.data)
          break;
        case "replay_start":
          onReplayStartMessage(dataObj.data)
          break;
        case "replay_will_end":
          onReplayWillEndMessage(dataObj.data)
          break;
        case "replay_end":
          onReplayEndMessage(dataObj.data)
          break;
        case "statfeed_event":
          onStatfeedEventMessage(dataObj.data)
          break;
      }
    }

    websocket.set(ws)
  }
});