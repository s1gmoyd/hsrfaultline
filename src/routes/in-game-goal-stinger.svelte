<script>
  import { showGoalTransition } from '../sosStore';
  import { onMount } from 'svelte';

  let video = null;

  $: if (video) {
    if ($showGoalTransition) {
      video.pause()
      video.currentTime = 0;
      video.style.display = "block";
      video.play();
    } else {
      video.style.display = "none";
    }
  }

  onMount(() => {
    video = document.getElementById("goal-stinger");
    video.load();
  });

</script>

<video id="goal-stinger" muted="muted" preload="auto">
  <source src="/main-stinger.webm" type="video/mp4">
</video>

<style>
  #goal-stinger {
    position: absolute;
    width: 1920px;
    height: 1080px;
    margin: 0px;
    top: 0px;
    left: 0px;
  }
</style>
