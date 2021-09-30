<script>
  import { blueTeam, orangeTeam, matchInfo, blueTeamLogo, orangeTeamLogo, matchScores } from '../rocsStore';
  import { showScoreline, blueScore, orangeScore, time, ot } from '../sosStore';

  let blueScoreImgs = [
    "/scores/green-1.png",
    "/scores/green-2.png",
    "/scores/green-3.png",
    "/scores/green-4.png",
  ];

  let orangeScoreImgs = [
    "/scores/yellow-1.png",
    "/scores/yellow-2.png",
    "/scores/yellow-3.png",
    "/scores/yellow-4.png",
  ];

  let numConvert = {
    1: "one",
    2: "two",
    3: "three",
    4: "four"
  };
</script>

<div id="container" class="{$showScoreline ? "" : "hidden"}">
  <div class="blue name">{$blueTeam ? $blueTeam.name.toUpperCase() : "TO BE DETERMINED"}</div>
  <div class="blue uni">{$blueTeam ? $blueTeam.organisation.name.toUpperCase() : "TO BE DETERMINED"}</div>
  <div class="blue score {$ot ? "overtime" : ""}">{$blueScore}</div>
  <div class="blue logo container">
    <img alt="blue logo" src={$blueTeamLogo} />
  </div>

  <div class="overtime text">{$ot ? "OVERTIME" : ""}</div>
  <div class="clock {$ot ? "overtime" : ""}">
    {$time < 0 
    ? "0:00" 
    : `${parseInt(Math.ceil($time) / 60)}:${("0" + Math.ceil($time - (parseInt(Math.ceil($time) / 60) * 60))).slice(-2)}`
    }
  </div>

  {#if $matchScores}
    {#each Array($matchScores.seriesScore.blueScore) as _, i}
      {#if i < 4}
        <div class="blue series container {numConvert[i + 1]}">
          <img src={blueScoreImgs[i]} alt="blue score {i + 1}"/>
        </div>
      {/if}
    {/each}
  {/if}

  {#if $matchScores}
    {#each Array($matchScores.seriesScore.orangeScore) as _, i}
      {#if i < 4}
        <div class="orange series container {numConvert[i + 1]}">
          <img src={orangeScoreImgs[i]} alt="orange score {i + 1}"/>
        </div>
      {/if}
    {/each}
  {/if}


  <div class="info">{$matchInfo.toUpperCase()}</div>

  <div class="orange name">{$orangeTeam ? $orangeTeam.name.toUpperCase() : "TO BE DETERMINED"}</div>
  <div class="orange uni">{$orangeTeam ? $orangeTeam.organisation.name.toUpperCase() : "TO BE DETERMINED"}</div>
  <div class="orange score {$ot ? "overtime" : ""}">{$orangeScore}</div>
  <div class="orange logo container">
    <img alt="orange logo" src={$orangeTeamLogo} />
  </div>
</div>


<style>
  @font-face {
    font-family: "Oxanium Bold";
    src: url('/fonts/Oxanium-Bold.ttf');
  }

  #container {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1920px;
    height: 1080px;
    margin: 0px;
    background-image: url('/ingame-score-hud.png');
    transition: 1s ease;
    font-family: "Oxanium Bold";
    color: #2a2a2a;
    overflow: hidden;
  }

  #container div {
    position: absolute;
  }

  #container.hidden {
    top: -145px;
    transition: 1s ease;
  } 

  .series.scontainer {
    width: 1920px;
    height: 1080px;
    top: 0px;
    left: 0px;
    margin: 0px;
  }

  .logo img {
    max-width: 90%;
    max-height: 90%;
    margin: auto;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
  }

  .logo.container {
    height: 90px;
    width: 90px;
    top: 0px;
  }

  .blue.logo.container {
    left: 385px;
  }

  .orange.logo.container {
    right: 385px;
  }

  .score {
    font-size: 48px;
    width: 60px;
    height: 65px;
    line-height: 65px;
    top: 15px;
    text-align: center;
    transition: 0.5s ease;
  }

  .score.overtime {
    top: 30px;
    transition: 0.5s ease;
  }

  .blue.score {
    left: 850px;
  }

  .orange.score {
    right: 850px;
  }

  .overtime.text {
    left: 900px;
    top: 0px;
    font-size: 24px;
    width: 120px;
    height: 45px;
    text-align: center;
    line-height: 45px;
  }

  .clock {
    left: 900px;
    top: 15px;
    font-size: 36px;
    width: 120px;
    height: 65px;
    text-align: center;
    line-height: 65px;
    transition: 0.5s ease;
  }

  .clock.overtime {
    top: 30px;
    transition: 0.5s ease;
  }

  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    left: 871px;
    top: 90px;
    font-size: 22px;
    width: 178px;
    height: 50px;
    text-align: center;
    line-height: 25px;
  }

  .name {
    top: 10px;
    color: white;
    width: 350px;
    height: 50px;
    font-size: 28px;
    line-height: 50px;
  }

  .blue.name {
    left: 480px;
  }

  .orange.name {
    right: 480px;
    text-align: right;
  }

  .uni {
    top: 55px;
    color: white;
    width: 360px;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
  }

  .blue.uni {
    left: 480px;
  }

  .orange.uni {
    right: 480px;
    text-align: right;
  }
</style>