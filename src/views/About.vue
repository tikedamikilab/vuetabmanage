<template>
  <!-- <div class="userinputbox">
    <textarea v-model="message" placeholder="入力"></textarea>
  </div> -->
  <div class="cont2">
    <button @click="sendmessage">送信</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendmessage(){

    }
  }
}
</script>

<style lang="scss" scoped>
.stage-root {
  position: absolute;
  top: calc(1%);
  left: calc(1%);
  //width: 350px;
  width: 100%;
  height: 100%;
  border: 4px solid rgb(219, 64, 142);
  background: white;
  box-sizing: border-box;
  overflow: hidden;
}
.cont {
  position: absolute;
  width: 100%;
  bottom: 0;
}
.cont2 {
  position: absolute;
  bottom: 0;
  right: 0;
}
.score-box {
  color: rgb(63, 59, 52);
  font-size: 26pt;
}
.score-info {
  color: rgb(63, 59, 52);
  font-size: 21pt;
}
.player {
    z-index: 0;
}
.userinputbox{
  position: absolute;
  width: 100%;
  bottom: 0px;
  background-color: rgb(211, 185, 197);
}
.line-break {
  word-wrap: break-word;
}
button {
  background-color: rgb(240, 206, 93);
  color: rgb(52, 63, 57);
  display: inline-block;
  width: 300px;
  height: 50px;
  box-sizing: border-box;
  border: 2px solid rgb(34, 136, 8);
  font-size: 20pt;
  outline: none;
  // &+button {
  //   margin-left: -2px;
  //   width: calc(50% + 2px);
  // }
}  
textarea{
  background-color: rgb(19, 34, 100);
  color: rgb(253, 255, 250);
  display: inline-block;
  width: 100%;
  height: 130px;
  box-sizing: border-box;
  border: 5px solid rgb(63, 59, 52);
  font-size: 14pt;
  outline: none;
}
</style>
