const path = require('path')

module.exports = function vkRtrg (options) {
  // Don't include on dev mode
  if (this.options.dev && process.env.NODE_ENV !== 'production') {
    return
  }

  // Add vk api script to head
  this.options.head.script.push({
    src: 'https://vk.com/js/api/openapi.js?160',
    async: true
  })

  // Register plugin
  this.addPlugin({ src: path.resolve(__dirname, 'plugin.js'), ssr: false, options })
}
