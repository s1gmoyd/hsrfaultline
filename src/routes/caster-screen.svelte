<script>
  import { casters, blueTeam, orangeTeam, blueTeamLogo, orangeTeamLogo, matchInfo, matchScores } from '../rocsStore'

  let numConvert = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
  }

</script>

<div id="container">
  <div class="background scorebug"></div>
  <div class="background casters"></div>

  <div class="blue team name">{$blueTeam ? $blueTeam.name.toUpperCase() : "TO BE DETERMINED"}</div>
  <div class="blue team uni">{$blueTeam ? $blueTeam.organisation.name.toUpperCase() : "TO BE DETERMINED"}</div>
  <div class="blue team logo container">
    <img alt="blue team logo" src={$blueTeamLogo} />
  </div>

  <div class="info">{$matchInfo.toUpperCase()}</div>

  <div class="orange team name">{$orangeTeam ? $orangeTeam.name.toUpperCase() : "TO BE DETERMINED"}</div>
  <div class="orange team uni">{$orangeTeam ? $orangeTeam.organisation.name.toUpperCase() : "TO BE DETERMINED"}</div>
  <div class="orange team logo container">
    <img alt="orange team logo" src={$orangeTeamLogo} />
  </div>

  <div class="score series">{$matchScores ? $matchScores.seriesScore.blueScore : "0"} - {$matchScores ? $matchScores.seriesScore.orangeScore : "0"}</div>

  <div class="score games container">
    {#if $matchScores}
      {#each $matchScores.gameScores as gameScore, i}
        {#if gameScore.blueScore != 0 || gameScore.orangeScore != 0}
          <div class="score games {numConvert[i + 1]} {gameScore.blueScore > gameScore.orangeScore ? 'blue' : 'orange'}">{gameScore.blueScore} - {gameScore.orangeScore}</div>
        {/if}
      {/each}
    {/if}  
  </div>

  <div class="caster one name">{$casters && $casters[0] ? $casters[0].name.toUpperCase() : "NAME HERE"}</div>
  <div class="caster one twitter">@{$casters && $casters[0] ? $casters[0].twitter.toUpperCase() : "TWITTER HERE"}</div>

  <div class="caster two name">{$casters && $casters[1] ? $casters[1].name.toUpperCase() : "NAME HERE"}</div>
  <div class="caster two twitter">@{$casters && $casters[1] ? $casters[1].twitter.toUpperCase() : "TWITTER HERE"}</div>
</div>


<style>
  @font-face {
    font-family: "Oxanium Bold";
    src: url("/fonts/Oxanium-Bold.ttf");
  }

  #container {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1920px;
    height: 1080px;
    margin: 0px;
    font-family: "Oxanium Bold";
    overflow: hidden;
  }

  #container div {
    position: absolute;
  }

  .background {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1920px;
    height: 1080px;
    margin: 0px;
  }

  .background.scorebug {
    background-image: url('/desk-score-hud.png');
  }

  .background.casters {
    background-image: url('/casters-base.png');
  }

  .caster.name, .caster.twitter {
    width: 650px;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }

  .caster.name {
    top: 855px;
    font-size: 46px;
  }

  .caster.twitter {
    top: 900px;
    font-size: 32px;
  }

  .caster.one {
    left: 145px;
  }

  .caster.two {
    right: 145px;
  }

  img {
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

  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    left: 860px;
    top: 55px;
    font-size: 20px;
    width: 200px;
    height: 35px;
    text-align: center;
    line-height: 18px;
  }

  .team.name {
    top: 10px;
    color: white;
    width: 350px;
    height: 50px;
    font-size: 28px;
    line-height: 50px;
  }

  .blue.team.name {
    left: 480px;
  }

  .orange.team.name {
    right: 480px;
    text-align: right;
  }

  .team.uni {
    top: 55px;
    color: white;
    width: 360px;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
  }

  .blue.team.uni {
    left: 480px;
  }

  .orange.team.uni {
    right: 480px;
    text-align: right;
  }

  .score.series {
    font-size: 48px;
    width: 200px;
    text-align: center;
    left: 860px;
    height: 60px;
    line-height: 60px;
    top: 0px;
  }

  #container div.score.games.container {
    position: relative;
    display: flex;
    justify-content: center;
    top: 95px;
    width: 1130px;
    height: 45px;
    font-size: 28px;
    text-align: center;
    left: 390px;
    align-items: center;
  }

  #container div.score.games {
    margin-left: 5px;
    margin-right: 5px;
    position: relative;
    width: 100px;
  }

  .score.games.blue {
    border-bottom: 4px solid #007cc3;
  }

  .score.games.orange {
    border-bottom: 4px solid #ed1848;
  }
</style>