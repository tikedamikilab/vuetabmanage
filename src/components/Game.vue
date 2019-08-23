<template>
  <div class="game">
    <p>じゃんけん！</p>
    <button
      v-for="item in menu"
      :key="item.key"
      class="selecthand-btn"
      @click="handleClick(item.key)"
    >{{ item.label }}</button>
    <p>私は{{ player | label(menu) }}</p>
    <p>相手は{{ bot | label(menu) }}</p>
    <p>この勝負…{{ result | resultText }}</p>
  </div>
</template>

<script>
// import { scrypt } from "crypto";
// import { scrypt } from 'vm';
export default{
  name: 'Game',
  data(){
    return{
      player: '',
      bot: '',
      menu: [
        {label: 'グー', key: 'guu' },
        {label: 'チョキ', key: 'tyoki' },
        {label: 'パー', key: 'paa' }
      ]
    }
  },
  filters: {
    label (value, menu){
      if (!value) return ''
      return menu.find(item => item.key === value).label
    },
    resultText (value){
      let map ={
        win: 'あなたの勝ち！😍',
        lose: 'あなたの負け…😨',
        draw: '引き分けっ😑'
      }
      return map[value]
    }
  },
  computed: {
    result(){
      let {player, bot} = this
      if (!player || !bot) return ''
      let map = {
        guu: {
          guu: 'draw',
          tyoki: 'win',
          paa: 'lose'
        },
        tyoki: {
          guu: 'lose',
          tyoki: 'draw',
          paa: 'win'
        },
        paa: {
          guu: 'win',
          tyoki: 'lose',
          paa: 'draw'
        }
      }
      return map[player][bot]
    }
  },
  methods: {
    handleClick (key) {
      this.player = key
      this.getBotSelect()
    },
    getBotSelect () {
      let random = this.getRandom(0, this.menu.length - 1)
      this.bot = this.menu[random].key
    },
    getRandom (min, max) {
      return min + Math.floor(Math.random() * (max + 1))
    }
  }
}
</script>

<style lang="scss" scoped>
.selecthand-btn {
  background-color: rgb(51, 106, 207);
  color: rgb(58, 184, 223);
  display: inline-block;
  width: 20%;
  left: 25%;
  padding: 10px;
  box-sizing: border-box;
  border: 4px solid rgb(97, 89, 74);
  font-size: 14pt;
  font-weight: bold;
  outline: none;
  border-radius: 10px;
}
</style>