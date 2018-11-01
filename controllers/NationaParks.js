module.exports = {
  read: (req, res) => {
    let db = req.app.get('db')
    db.getNationalParks().then(response => {
      res.status(200).send(response)
    }).catch(err => {
      console.log('error fetching parks:', err)
      res.status(500).send(err)
    })
  },

  create: (req, res) => {
    let db = req.app.get('db')
    let { name, imageUrl, date, location, acres, description } = req.body
    db.createNationalPark([name, imageUrl, location, date, acres, description]).then(response => {
      res.send(response)
    })
  },

  update: (req, res) => {
    let db = req.app.get('db')
    let { id } = req.params
    let park = req.body
    park.id = id
    db.updateNationalPark(park).then(response => {
      res.send(response)
    }).catch(err => {
      res.status(500).send(err)
    })
  },

  delete: (req, res) => {

  },

  getByName: (req, res) => {
    let db = req.app.get('db')
    db.getParksByName(req.query.name).then(response => {
      res.send(response)
    })
  }
}