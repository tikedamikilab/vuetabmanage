<template>
  <div class="gameview">
    <img alt="Vue logo" src="../assets/logo.png">
    <Game/>
  </div>
</template>

<script>
// @ is an alias to /src
import Game from '@/components/Game.vue'

export default {
  name: 'gameview',
  components: {
    Game
  }
}
</script>
