const axios = require('axios').default

module.exports = {
  githubProfile: async (userName) => {
    return axios.get(`https://api.github.com/users/${userName}`)
      .then(e => {
        return e.data
      })
      .catch(err => {
        return err
      })
  }
}