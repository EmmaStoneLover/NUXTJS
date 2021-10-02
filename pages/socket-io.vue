<template>
  <div class="container mt-3">
    <form @submit.prevent="SocketIo(text)" class="m-3">
      <input type="text" class="form-control" v-model="text" />
      <br /><br />
      <h3 class="">{{ text }}</h3>
    </form>
  </div>
</template>

<style scoped></style>

<script>
export default {
  layout: 'home',
  data() {
    return {
      text: '',
    }
  },
  mounted() {
    console.log('Я открылся))))')
    this.socket = this.$nuxtSocket({
      channel: '/socket-io',
    })
  },
  methods: {
    SocketIo(text) {
      this.socket.emit(
        'text',
        {
          text: text,
        },
        (res) => {
          console.log(res.data.text)
        }
      )
    },
  },
}
</script>
