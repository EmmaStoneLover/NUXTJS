<template>
  <div class="container">
    <div class="row justify-content-center">
      <div
        id="drop"
        v-for="category in categories"
        :key="category.id"
        class="alert row justify-content-center text-center mt-3 ml-5"
        :class="category.how"
        :style="category.style"
        @drop="onDrop($event, category.id)"
        @dragover.prevent
        @dragenter.prevent
      >
        <h1>{{ category.title }}</h1>
        <div
          class="col-lg-5 alert m-2"
          :class="item.bg"
          v-for="item in drags.filter((i) => i.categoryId === category.id)"
          :key="item.id"
          @dragstart="onDrag($event, item)"
          draggable="true"
        >
          <h3>{{ item.text }}</h3>
        </div>
      </div>
    </div>
    <div
      id="delete"
      class="alert alert-danger text-center"
      @drop="deleteDrop($event)"
      @dragover.prevent
      @dragenter.prevent
    >
      <h3>Удалить</h3>
    </div>
    <!-- <h1 @click="bgDark()" class="text-white">Жопа</h1> -->
  </div>
</template>

<script>
export default {
  layout: 'home',
  data() {
    return {
      drags: [
        { text: 'Мойша', id: 1, bg: 'alert-warning', categoryId: 2 },
        { text: 'Марк', id: 2, bg: 'alert-warning', categoryId: 2 },
        { text: 'Измаил', id: 3, bg: 'alert-warning', categoryId: 2 },
        { text: 'Жопа', id: 4, bg: 'alert-warning', categoryId: 2 },
      ],
      categories: [
        { id: 1, title: 'Печь', how: 'alert-danger' },
        { id: 2, title: 'Евреи', how: 'alert-success' },
      ],
      // background-image: url(fire.gif); background-size: 100%; min-height: 200px;
    }
  },
  methods: {
    onDrag(e, item) {
      e.dataTransfer.dropEffect = 'moove'
      e.dataTransfer.effectAllowed = 'moove'
      e.dataTransfer.setData('itemId', item.id.toString())
    },
    onDrop(e, categoryId) {
      const itemId = parseInt(e.dataTransfer.getData('itemId'))
      this.drags = this.drags.map((i) => {
        if (i.id === itemId) i.categoryId = categoryId
        return i
      })
    },
    deleteDrop(e) {
      const itemId = parseInt(e.dataTransfer.getData('itemId'))
      this.drags = this.drags.filter((i) => i.id !== itemId)
    },
    // bgDark() {
    //   this.drags[0].bg = 'bg-dark text-white'
    //   this.drags[1].bg = 'bg-dark text-white'
    //   this.drags[2].bg = 'bg-dark text-white'
    //   this.drags[3].bg = 'bg-dark text-white'
    // },
  },
}
</script>

<style scoped>
.alert {
  cursor: pointer;
}
#drop,
#drag {
  width: 100%;
  position: relative;
  min-height: 100px;
}
#delete {
  max-width: 200px;
}
</style>
