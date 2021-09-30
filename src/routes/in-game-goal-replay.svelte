<script>
  import { showGoalOverlay, goalTeam, goalScorer, goalAssister, goalSpeed } from '../sosStore';
</script>

<div id="container" style="display: {$showGoalOverlay ? "block" : "none"};">
  <video id="replay-icon-vid" muted="muted" preload="auto" autoplay loop>
    <source src="/Replay_Icon.webm" type="video/mp4">
  </video>
  {#if $goalTeam != null && $goalScorer}
    <div class="infobox {$goalTeam == 0 ? 'blue' : 'red'}">
      <div class="iconbox scorer">
        <img src="/goal.svg" alt="goal icon" class="icon" />
      </div>
      <div class="scorer">{$goalScorer.name.toUpperCase()}</div>
      <div class="iconbox assister">
        <img src="/assist.svg" alt="assist icon" class="icon" />
      </div>
      <div class="assister">{$goalAssister ? $goalAssister.name.toUpperCase() : "UNASSISTED"}</div>
      <div class="iconbox speed">
        <img src="/disruptor.svg" alt="speed icon" class="icon" />
      </div>
      <div class="speed">{parseInt($goalSpeed)} KPH</div>
    </div>
  {/if}
</div>

<style>
  @font-face {
    font-family: "Oxanium Bold";
    src: url("/fonts/Oxanium-Bold.ttf")
  }

  #container {
    position: absolute;
    width: 1920px;
    height: 1080px;
    margin: 0px;
    top: 0px;
    left: 0px;
    background-image: url("/vignette.png");
    font-family: "Oxanium Bold";
  }

  #replay-icon-vid {
    position: absolute;
    width: 272px;
    height: 153px;
    right: 50px;
    bottom: 0px;
  }

  .infobox {
    position: absolute;
    width: 640px;
    height: 120px;
    left: 640px;
    bottom: 0px;
    overflow: hidden;
  }

  .infobox.blue {
    background-image: url("/green-player-replay.png");
  }

  .infobox.red {
    background-image: url("/yellow-player-replay.png");
  }

  .infobox div {
    position: absolute;
  }

  .scorer, .assister, .speed {
    top: 60px;
    width: 190px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 24px;
    overflow: hidden;
  }

  .assister {
    left: 25px;
  }

  .scorer {
    left: 225px;
  }

  .speed {
    right: 25px;
  }

  .iconbox {
    height: 50px;
    width: 200px;
    top: 10px;
  }

  .iconbox img {
    max-width: 90%;
    max-height: 90%;
    margin: auto;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
  }

  .iconbox.assister {
    left: 20px;
  }

  .iconbox.scorer {
    left: 220px;
  }

  .iconbox.speed {
    right: 20px;
    filter: grayscale(100%);
  }
</style>