const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080'
      }
    }
    // port: 8081 // has been changed to proxy for development process
  }
}