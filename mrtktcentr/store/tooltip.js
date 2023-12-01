export const state = () => ({
  x: '0',
  y: '0',
  display: 'none'
})

export const mutations = {
  clearTooltipStyle (state) {
    state.x = '0'
    state.y = '0'
    state.display = 'none'
  },
  updateTooltipStyle (state, coords) {
    state.x = `${coords.x + 10}px`
    state.y = `${coords.y + 10}px`
    state.display = 'block'
  }
}
