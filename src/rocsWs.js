import { amp, browser, dev, mode, prerendering } from '$app/env';
import { get, writable } from 'svelte/store';
import { onOverlayloadMessage, onMatchMessage, onTalentMessage, onScheduleMessage, onLeaguesMessage, onPlayoffsMessage } from './rocsStore';

export const isBrowser = writable(browser);
export const websocket = writable(null)

isBrowser.subscribe((newIsBrowser) => {
  if (newIsBrowser) {
    let ws = new WebSocket("wss://rocs.unirocketeers.com/ws");

    function registerEvent(channel, event) {
      if (ws.OPEN) {
        ws.send(JSON.stringify({
          "event": "wsRelay:register",
          "data": `${channel}:${event}`
        }))
      }
    }

    ws.onopen = (event) => {
      registerEvent("HSRocketeers", "overlayload");
      registerEvent("HSRocketeers", "match");
      registerEvent("HSRocketeers", "talent");
      registerEvent("HSRocketeers", "schedule");
      registerEvent("HSRocketeers", "leagues");
      registerEvent("HSRocketeers", "playoffs");
    }

    ws.onmessage = ({data}) => {
      let dataObj = JSON.parse(data);
      switch (dataObj.event.split(":")[1]) {
        case "overlayload":
          onOverlayloadMessage(dataObj.data)
          break;
        case "match":
          onMatchMessage(dataObj.data)
          break;
        case "talent":
          onTalentMessage(dataObj.data)
          break;
        case "schedule":
          onScheduleMessage(dataObj.data)
          break;
        case "leagues":
          onLeaguesMessage(dataObj.data)
          break;
        case "playoffs":
          onPlayoffsMessage(dataObj.data)
          break;
      }
    }

    websocket.set(ws)
  }
});