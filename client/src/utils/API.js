import axios from 'axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all kittens

  getKittens: function () {
    return axios.get('/api/kittens', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
  },
  // Gets the kittens with the given id
  getKitten: function (id) {
    return axios.get('/api/kittens/' + id, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
  },
  // Deletes the book with the given id
  deleteKittens: function (id) {
    return axios.delete('/api/kittens/' + id)
  },
  // Saves a book to the database
  saveKittens: function (kittenData) {
    return axios.post('/api/kittens', kittenData)
  },
  updateKitten: function (kittenData) {
    console.log(kittenData)
    return axios.put('/api/kittens/' + kittenData._id, kittenData)
  },
  updateKittens: function (kittenData) {
    return axios.post('/api/kittens', kittenData)
  },
  userLogin: function (userData) {
    return axios.post('/api/login', userData)
  }
}
