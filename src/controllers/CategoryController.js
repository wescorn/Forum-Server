const { ForumCategory } = require('../models')

module.exports = {
  async getAllCategories (req, res) {
    try {
      const categories = await ForumCategory.findAll({
        limit: 20
      })
      res.send(categories)
    } catch (err) {
      res.status(500).send(
        {
          error: "Couldn't retrieve categories: " + err
        }
      )
    }
  },

  async getCategory (req, res) {
    try {
      const category = await ForumCategory.find({
        where: {
          id: req.params.id
        }
      })
      res.send(category)
    } catch (err) {
      res.status(500).send(
        {
          error: "Couldn't retrieve category: " + err
        }
      )
    }
  },

  async createCategory (req, res) {
    try {
      const category = await ForumCategory.create(req.body)
      res.send(category)
    } catch (err) {
      res.status(500).send(
        {
          error: "Couldn't create category: " + err
        }
      )
    }
  }
}
