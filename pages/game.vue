<template>
  <div>
    <input
      @keydown.right="MoveCharacterRight()"
      @keydown.left="MoveCharacterLeft()"
      @keydown.down="MoveCharacterDown()"
      @keydown.up="MoveCharacterUp()"
      @keydown.esc="RestartCharacter()"
    />
    <div
      id="character"
      class="text-white"
      :style="{ left: character.left + 'px', top: character.top + 'px' }"
    >
      Жопа
    </div>
    <div id="block1"></div>
    <div id="block2"></div>
  </div>
</template>

<style scoped>
#character {
  width: 50px;
  height: 50px;
  background-color: blueviolet;
  position: fixed;
  padding-top: 12px;
  text-align: center;
}
#block1,
#block2 {
  width: 100px;
  height: 100px;
  position: fixed;
}
#block1 {
  background-color: chocolate;
  left: 350px;
  top: 200px;
}
#block2 {
  background-color: crimson;
  left: 200px;
  top: 100px;
}
input {
  width: 40px;
  height: 40px;
  position: fixed;
  left: 180px;
  top: 10px;
}
</style>

<script>
export default {
  layout: 'home',
  data() {
    return {
      character: {
        left: 50,
        top: 100,
      },
    }
  },
  methods: {
    MoveCharacterRight() {
      this.character.left = this.character.left + 50
    },
    MoveCharacterLeft() {
      this.character.left = this.character.left - 50
    },
    MoveCharacterDown() {
      this.character.top = this.character.top + 50
    },
    MoveCharacterUp() {
      this.character.top = this.character.top - 50
    },
    RestartCharacter() {
      this.character.top = this.character.left = 50
    },
  },
}
</script>
