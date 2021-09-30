<script>
  import { showSpectatedPlayer, spectatedPlayer, inReplay } from '../sosStore';

  $: speedPercent = (() => {
    let percent = "0%";
    if ($spectatedPlayer && $spectatedPlayer.speed > 0) {
      percent = Math.min(Math.max($spectatedPlayer.speed, 0), 82.8) / 82.8 * 100 + "%";
    } 
    return percent; 
  })();
  
  $: boostPercent = (() => {
    let percent = "0%";
    if ($spectatedPlayer) {
      percent = $spectatedPlayer.boost + "%";
    } 
    return percent; 
  })();
</script>

{#if $showSpectatedPlayer && !$inReplay}
  <div class="container {$spectatedPlayer.team == 0 ? 'blue' : 'orange'}">
    <div class="name">{$spectatedPlayer.name.toUpperCase()}</div>
    <div class="boostbar">
      <div class="boost">{$spectatedPlayer.boost}</div>
      <div class="bar" style="--boost-percent: {boostPercent}"></div>
    </div>
    <div class="speedbar">
      <div class="speedvalue">{$spectatedPlayer.speed} KPH</div>
      <div class="speed" style="--speed-percent: {speedPercent}"></div>
    </div>
    <div class="stats box">
      <div class="stats container goals">
        <div class="stats title">GOALS</div>
        <div class="stats stat">{$spectatedPlayer.goals}</div>
      </div>
      <div class="stats container assists">
        <div class="stats title">ASSISTS</div>
        <div class="stats stat">{$spectatedPlayer.assists}</div>
      </div>
      <div class="stats container saves">
        <div class="stats title">SAVES</div>
        <div class="stats stat">{$spectatedPlayer.saves}</div>
      </div>
      <div class="stats container shots">
        <div class="stats title">SHOTS</div>
        <div class="stats stat">{$spectatedPlayer.shots}</div>
      </div>
      <div class="stats container demos">
        <div class="stats title">DEMOS</div>
        <div class="stats stat">{$spectatedPlayer.demos}</div>
      </div>
      <div class="stats container score">
        <div class="stats title">SCORE</div>
        <div class="stats stat">{$spectatedPlayer.score}</div>
      </div>
    </div>
  </div>
{/if}

<style>
  @font-face {
    font-family: "Oxanium Bold";
    src: url("/fonts/Oxanium-Bold.ttf");
  }

  .container {
    font-family: "Oxanium Bold";
    width: 640px;
    height: 120px;
    left: 640px;
    bottom: 0px;
    overflow: hidden;
    position: absolute;
    margin: 0px;
  }

  .container div {
    position: absolute;
  }

  .container.blue {
    background-image: url("/green-player-spectate.png");
  }

  .container.orange {
    background-image: url("/yellow-player-spectate.png");
  }

  .container div.stats.box {
    display: flex;
    position: absolute;
    width: 580px;
    bottom: 6px;
    height: 50px;
    left: 30px;
    align-items: center;
    justify-content: space-evenly;
  }

  .stats.container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    left: 0px;
  }

  .stats.container div {
    position: relative;
    width: 100%;
    text-align: center;
    justify-content: center;
  }

  .stats.container .title {
    height: 45%;
    font-size: 18px;
  }

  .stats.container .stat {
    height: 55%;
    font-size: 22px;
  }

  .name {
    width: 290px;
    height: 52px;
    line-height: 60px;
    left: 176px;
    bottom: 64px;
    text-align: center;
    overflow: hidden;
    font-size: 28px;
  }

  .speedbar, .boostbar {
    width: 137px;
    height: 52px;
    bottom: 64px;
  }

  .boostbar {
    right: 37px;
  }

  .speedbar {
    left: 37px;
  }
  
  .boost, .speedvalue {
    height: 100%;
    width: 157px;
    text-align: center;
    overflow: hidden;
    font-size: 24px;
    color: white;
    line-height: 57px;
    z-index: 2;
  }

  .speedvalue {
    left: -8px;
  }

  .boost {
    right: -12px;
  }

  .container.blue .bar, .container.blue .speed {
    background-color: #006268
  }

  .container.orange .bar, .container.orange .speed {
    background-color: #d4af37
  }

  .bar {
    height: 100%;
    width: var(--boost-percent);
    transform: skewX(20deg);
    transition: width 100ms linear;  
  }

  .speed {
    position: absolute;
    right: 0px;
    height: 100%;
    width: 100%;
    transform: skewX(-20deg);
    transition: width 100ms linear;  
  }

  .bar:after {
    content: '\A';
    position: absolute;
    top:0;
    bottom:0;
    left:0;
  }

  .speed:before {
    content: '\A';
    position: absolute;
    top:0;
    bottom:0;
    left:0;
  }
</style>