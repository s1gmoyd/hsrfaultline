<script>
  import { playoffBrackets } from '../rocsStore'

  let numConvert = {
    1: "one",
    2: "two",
    3: "three",
    4: "four"
  }
</script>
<div class="scenelabel playoffs">Playoffs</div>
<div class="matchlabel seeding">Seeding Match</div>
<div class="matchlabel gauntletone">Round 1</div>
<div class="matchlabel gauntlettwo">Round 2</div>
<div class="matchlabel gauntletthree">Round 3</div>
{#if $playoffBrackets && $playoffBrackets[0]}
  {#each $playoffBrackets[0].bracket as bracket, i}
    {#each bracket as round, j}
      {#each round.matches as match, k}
        <div class="match {i == 0 ? 'upper' : 'lower'} round-{numConvert[j + 1]} match-{numConvert[k + 1]}">
          {#if match.blueTeam && match.blueTeam.organisation.logos.length > 0}
            <div class="blue logobox">
              <img class="blue logo" alt="blue logo" src={match.blueTeam.organisation.logos[0].logo_src} />
            </div>
          {/if}
          <div class="blue name">{match.blueTeam ? match.blueTeam.name.toUpperCase() : ""}</div>
          <div class="blue score">{match.blueScore}</div>
          {#if match.orangeTeam && match.orangeTeam.organisation.logos.length > 0}
            <div class="orange logobox">
              <img class="orange logo" alt="orange logo" src={match.orangeTeam.organisation.logos[0].logo_src} />
            </div>
          {/if}
          <div class="orange name">{match.orangeTeam ? match.orangeTeam.name.toUpperCase() : ""}</div>
          <div class="orange score">{match.orangeScore}</div>
        </div>
      {/each}
    {/each}
  {/each}
{/if}

<style>
  @font-face {
    font-family: "Oxanium Bold";
    src: url("/fonts/Oxanium-Bold.ttf");
  }

  .scenelabel {
    position: absolute;
    font-family: "Oxanium Bold";
    text-align: center;
    z-index: -1;
    margin: auto;
    font-size: 144px;
    line-height: 180px;
    color: #2a2a2a;
  }

  .matchlabel {
    position: absolute;
    font-family: "Oxanium Bold";
    text-align: center;
    z-index: -1;
    margin: auto;
    font-size: 48px;
    line-height: 60px;
    width: 429px;
    padding-left: 20px;
    height: 60px;
    color: #2a2a2a;
  }

  .scenelabel.playoffs {
    top: 60px;
    left: 650px;
    height: 100px;
    width: 620px;
  }

  .matchlabel.seeding {
    bottom: 720px;
    left: 745px;
  }

  .matchlabel.gauntletone {
    bottom: 420px;
    left: 245px;
  }

  .matchlabel.gauntlettwo {
    bottom: 470px;
    left: 745px;
  }

  .matchlabel.gauntletthree {
    bottom: 520px;
    left: 1245px;
  }

  .match {
    position: absolute;
    height: 120px;
    background-image: url("/playoff-regular-base.png");
    width: 429px;
    font-family: "Oxanium Bold";
  }

  .match div {
    position: absolute;
  }

  .match.upper.round-one.match-one {
    left: 745px;
    bottom: 600px;
  }

  .match.lower.round-one.match-one {
    left: 245px;
    bottom: 300px;
  }

  .match.lower.round-two.match-one {
    left: 745px;
    bottom: 350px;
  }

  .match.lower.round-three.match-one {
    left: 1245px;
    bottom: 400px;
  }

  .logobox {
    height: 60px;
    width: 60px;
    top: 0px;
  }

  .logo {
    max-width: 90%;
    max-height: 90%;
    margin: auto;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
  }

  .blue.logobox {
    top: 0px;
    left: 45px;
  }

  .orange.logobox {
    top: 60px;
    left: 25px;
  }

  .name {
    font-size: 21px;
    color: white;
    height: 60px;
    line-height: 65px;
    width: 240px;
    overflow: hidden;
  }

  .blue.name {
    top: 0px;
    left: 110px;
  }

  .orange.name {
    top: 60px;
    left: 90px;
  }

  .score {
    width: 70px;
    height: 60px;
    line-height: 65px;
    font-size: 48px;
    text-align: center;
  }

  .blue.score {
    left: 352px;
    top: 0px;
  }

  .orange.score {
    left: 331px;
    top: 60px;
  }

  .match.reset .blue.score {
    left: 407px;
  }

  .match.reset .orange.score {
    left: 386px;
  }
</style>