import axios from 'axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all kittens
  getKittens: function () {
    return axios.get('/api/kittens')
  },
  // Gets the kittens with the given id
  getKitten: function (id) {
    return axios.get('/api/kittens/' + id)
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
  }
}
