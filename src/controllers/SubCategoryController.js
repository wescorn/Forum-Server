const {ForumSubCategory} = require('../models')

module.exports = {
  async getAllSubCategories (req, res) {
    try {
      const subcategories = await ForumSubCategory.findAll({
        limit: 20
      })
      res.send(subcategories)
    } catch (err) {
      res.status(500).send(
        {
          error: "Couldn't retrieve categories: " + err
        }
      )
    }
  },

  async getSubCategoriesByParentId (req, res) {
    try {
      const subcategories = await ForumSubCategory.findAll({
        where: {
          category_id: req.params.id
        }
      })
      res.send(subcategories)
    } catch (err) {
      res.status(500).send(
        {
          error: "Couldn't retrieve category: " + err
        }
      )
    }
  },

  async createSubCategory (req, res) {
    try {
      const subcategory = await ForumSubCategory.create(req.body)
      res.send(subcategory)
    } catch (err) {
      res.status(500).send(
        {
          error: "Couldn't create category: " + err
        }
      )
    }
  }

}
