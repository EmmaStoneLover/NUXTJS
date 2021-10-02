export const state = () => ({
  text: [],
  howMuch: 0,
})

export const mutations = {
  getTextStor(state, content) {
    state.text = content
    state.text.forEach((el) => {
      el.changeTextButton = false
    })
  },
  addWillChangedText(state, text) {
    state.text = [...state.text, text]
  },
  addTextStor(state, newText) {
    // console.log('Пришло на Стор', newText)
    state.text = newText
  },
  deleteTextStor(state, _id) {
    state.text = state.text.filter((i) => i._id !== _id)
  },
  howMuchText(state) {
    state.howMuch = Object.keys(state.text).length
  },
  // showChangeTextButton(state, _id) {
  //   const item = state.text.find((i) => i._id === _id)
  //   const i = state.text.indexOf(item)
  //   item.changeTextButton = true
  //   state.text[i] = item
  //   console.log(state.text[i].changeTextButton)
  // },
}
