<script>
  import { schedule, onStream, blueTeam } from '../rocsStore' 

  let previousMatch = null;
  let currentMatch = null;

  $: if ($schedule) {
    if ($schedule.length == 1) {
      if ($onStream[0]) {
        currentMatch = $schedule[0]
        previousMatch = null;
      } else {
        previousMatch = $schedule[0]
        currentMatch = null
      }
    } else {
      currentMatch = null;
      previousMatch = null;
      for (let i = 0; i < $schedule.length; i++) {
        if ($onStream[i]) {
          currentMatch = $schedule[i];
          if (i > 0) {
            previousMatch = $schedule[i - 1];
          } else {
            previousMatch = null;
          }
        }
      }

      if (!currentMatch) {
        previousMatch = $schedule[$schedule.length - 1]
      }
    }
  } else {
    previousMatch = null;
    currentMatch = null
  }
</script>


<div id="container">

{#if previousMatch}
  <div class="previous match">
    {#if previousMatch.selectedBlueTeam}
      <div class="blue logo box">
        <img src={previousMatch.selectedBlueLogo} alt="blue logo" />
      </div>
    {/if}
    <div class="blue score">{previousMatch.selectedBlueTeamSeriesScore}</div>
    {#if previousMatch.selectedOrangeTeam}
      <div class="orange logo box">
        <img src={previousMatch.selectedOrangeLogo} alt="blue logo" />
      </div>
    {/if}
    <div class="orange score">{previousMatch.selectedOrangeTeamSeriesScore}</div>
  </div>
{/if}

{#if currentMatch}
  <div class="current match">
    {#if currentMatch.selectedBlueTeam}
      <div class="blue logo box">
        <img src={currentMatch.selectedBlueLogo} alt="blue logo" />
      </div>
    {/if}
    <div class="blue score">{currentMatch.selectedBlueTeamSeriesScore}</div>
    {#if currentMatch.selectedOrangeTeam}
      <div class="orange logo box">
        <img src={currentMatch.selectedOrangeLogo} alt="blue logo" />
      </div>
    {/if}
    <div class="orange score">{currentMatch.selectedOrangeTeamSeriesScore}</div>
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
    top: 0px;
    left: 0px;
    overflow: hidden;
    background-image: url("/break-screen-base.png");
    margin: 0px;
    font-family: "Oxanium Bold";
    color: white;
  }

  #container div {
    position: absolute;
  }

  .match {
    width: 700px;
    height: 75px;
    right: 50px;
  }

  .previous {
    top: 500px; 
    background-image: url("/break-screen-previous.png");
  }

  .current {
    top: 675px; 
    background-image: url("/break-screen-next.png");
  }

  .logo.box {
    height: 65px;
    width: 50px;
    top: 5px;
  }

  .logo.box img {
    max-width: 90%;
    max-height: 90%;
    margin: auto;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
  }

  .blue.logo.box {
    left: 25px;
  }

  .orange.logo.box {
    right: 25px;
  }

  .score {
    font-size: 72px;
    width: 60px;
    height: 75px;
    line-height: 80px;
    text-align: center;
  }

  .blue.score {
    left: 95px;
  }

  .orange.score {
    right: 95px;
  }
</style>