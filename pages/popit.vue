<template>
  <div class="container text-center mt-4">
    <div v-show="popit">
      <h1>Ты гей?</h1>
      <div id="box" class=" p-3">
        <button class="btn btn-success" @click="PopIt()"><h1>Нет</h1></button>
        <button
          id="no"
          class="btn btn-danger"
          :style="{ top: top, left: left }"
          @click="ChangePosition()"
          @mouseenter="ChangePosition()"
        >
          <h1>Да</h1>
        </button>
      </div>
    </div>
    <div v-show="!popit">
      <h1>Жаль</h1>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'home',
  data() {
    return {
      left: '0',
      top: '0',
      popit: true,
    }
  },
  methods: {
    ChangePosition() {
      this.left = `${Math.floor(Math.random() * (40 + 50 + 1)) - 50}%`
      this.top = `${Math.floor(Math.random() * (300 - 0 + 1)) + 0}px`
    },
    PopIt() {
      this.popit = false
    },
  },
}
</script>

<style scoped>
#box {
  border-radius: 20px;
  min-height: 300px;
}
#no {
  position: relative;
}
</style>
