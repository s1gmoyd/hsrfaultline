<script>
  import { bluePlayers, orangePlayers, showAllBoost } from '../sosStore';

  $: bluePlayersList = (() => {
    let players = [];
    for (let playerId in $bluePlayers) {
      players.push($bluePlayers[playerId])
    }
    return players;
  })();

  $: blueBoostList = (() => {
    let boost = [];
    for (let playerId in $bluePlayers) {
      boost.push($bluePlayers[playerId].boost + "%")
    }
    return boost;
  })();

  $: orangePlayersList = (() => {
    let players = [];
    for (let playerId in $orangePlayers) {
      players.push($orangePlayers[playerId])
    }
    return players;
  })();

  $: orangeBoostList = (() => {
    let boost = [];
    for (let playerId in $orangePlayers) {
      boost.push($orangePlayers[playerId].boost + "%")
    }
    return boost;
  })();

  let numConvert = {
    1: "one",
    2: "two",
    3: "three",
    4: "four"
  }
</script>

{#each bluePlayersList as player, i}
  <div class="blue container {numConvert[i + 1]}">
    <div class="blue name">{player.name.toUpperCase()}</div>
    <div class="blue boostbar">
      <div class="blue boost">{player.boost}</div>
      <div class="blue bar" style="--blue-boost-{i + 1}: {blueBoostList[i]}"></div>
    </div>
  </div>
{/each}

{#each orangePlayersList as player, i}
  <div class="orange container {numConvert[i + 1]}">
    <div class="orange name">{player.name.toUpperCase()}</div>
    <div class="orange boostbar">
      <div class="orange boost">{player.boost}</div>
      <div class="orange bar" style="--orange-boost-{i + 1}: {orangeBoostList[i]}"></div>
    </div>
  </div>
{/each}

<style>
  @font-face {
    font-family: "Oxanium Bold";
    src: url("/fonts/Oxanium-Bold.ttf")
  }

  .container {
    position: absolute;
    width: 250px;
    height: 60px;
    font-family: "Oxanium Bold";
    color: white;
  }

  .blue.container {
    left: 0px;
    background-image: url("/green-boost.png");
  }

  .orange.container {
    right: 0px;
    background-image: url("/yellow-boost.png");
  }

  .container.one {
    top: 25px;
  }

  .container.two {
    top: 100px;
  }

  .container.three {
    top: 175px;
  }

  .name {
    position: absolute;
    width: 230px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    overflow: hidden;
  }

  .orange.name {
    right: 0px;
  }

  .blue.boost {
    left: -5px;
  }

  .orange.boost {
    right: -5px;
  }

  .boostbar {
    position: absolute;
    width: 239px;
    height: 30px;
    top: 30px;
    line-height: 30px;
    text-align: center;
    overflow: hidden;
  }

  .boost {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .bar {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .bar.blue {
    transform: skewX(20deg);
    left: -5px;
  }

  .bar.orange {
    transform: skewX(-20deg);
    right: -5px;
  }

  .boostbar.orange {
    right: 0px;
  }

  .blue.container.one .bar:after {
    width: var(--blue-boost-1);
  }

  .blue.container.two .bar:after {
    width: var(--blue-boost-2);
  }

  .blue.container.three .bar::after {
    width: var(--blue-boost-3);
  }
  
  .orange.container.one .bar:before {
    width: var(--orange-boost-1);
  }

  .orange.container.two .bar:before {
    width: var(--orange-boost-2);
  }

  .orange.container.three .bar:before {
    width: var(--orange-boost-3);
  }

  .bar.orange:before {
    content:'\A';
    position: absolute;
    top:0; 
    bottom:0;
    right:0;  
    transition: width 100ms linear;
  }

  .bar.blue:after {
    content: '\A';
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    transition: width 100ms linear;  
  }

  .bar.blue:after {
    background-color: #006268
  }

  .bar.orange:before {
    background-color: #d4af37
  }

</style>