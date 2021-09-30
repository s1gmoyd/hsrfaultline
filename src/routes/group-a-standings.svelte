<script>
  import { leagueStandings } from '../rocsStore';

  let numConvert = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
  }
</script>
<div class="scenelabel groupa">Group A</div>
{#if $leagueStandings && $leagueStandings[0]}
  {#each $leagueStandings[0].standings as team, i}
    <div class="container {numConvert[i + 1]}">
      <div class="position">{i + 1}</div>
      <div class="logobox">
        <img style="display: {team.team && team.team.organisation.logos[0] ? 'block' : 'none'};" 
          class="logo" alt="logo {i + 1}" src="{team.team && team.team.organisation.logos[0] ? team.team.organisation.logos[0].logo_src : ''}" />
      </div>
      <div class="name">{team.team ? team.team.name.toUpperCase() : ""}</div>
      <div class="record">{team.wins}-{team.losses}</div>
      <div class="diff">
        {team.gameWins - team.gameLosses >= 0 
          ? `+${ + team.gameWins - team.gameLosses}`
          : team.gameWins - team.gameLosses}
      </div>
    </div>
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

  .scenelabel.groupa {
    top: 60px;
    left: 650px;
    height: 100px;
    width: 620px;
  }

  .container {
    position: absolute;
    width: 854px;
    height: 90px;
    left: 533px;
    font-family: "Oxanium Bold";
  }

  .container div {
    position: absolute;
  }

  .container.one {
    top: 345px;
    background-image: url("/standing-team-yellow.png");
  }

  .container.two {
    top: 470px;
    background-image: url("/standing-team-green.png");
  }

  .container.three {
    top: 595px;
    background-image: url("/standing-team-black.png");
  }

  .container.four {
    top: 720px;
    background-image: url("/standing-team-black.png");
  }

  .position {
    color: white;
    top: 0px;
    height: 90px;
    width: 120px;
    line-height: 98px;
    text-align: center;
    font-size: 72px;
  }

  .logobox {
    height: 90px;
    width: 90px;
    top: 0px;
    left: 120px;
  }

  .logobox img {
    max-width: 90%;
    max-height: 90%;
    margin: auto;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
  }

  .name {
    top: 0px;
    height: 90px;
    width: 375px;
    line-height: 98px;
    font-size: 32px;
    left: 215px;
    overflow: hidden;
  }

  .record {
    top: 0px;
    color: white;
    text-align: center;
    height: 90px;
    width: 155px;
    line-height: 98px;
    font-size: 54px;
    left: 580px;
    overflow: hidden;
  }

  .diff {
    top: 0px;
    text-align: center;
    height: 90px;
    width: 155px;
    line-height: 98px;
    font-size: 54px;
    left: 700px;
    overflow: hidden;
  }
</style>