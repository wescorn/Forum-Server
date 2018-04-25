const AuthendicationController = require('./controllers/AuthendicationController')
const AuthendicationControllerPolicy = require('./policies/AuthendicationControllerPolicy')
const CategoryController = require('./controllers/CategoryController')
const SubCategoryController = require('./controllers/SubCategoryController')

module.exports = (app) => {
  app.post('/register',
    AuthendicationControllerPolicy.register,
    AuthendicationController.register)

  app.post('/login',
    AuthendicationController.login)

  app.get('/categories',
    CategoryController.getAllCategories)

  app.post('/category',
    CategoryController.createCategory)

  app.get('/categories/:id',
    CategoryController.getCategory)

  app.get('/subcategories/:id',
    SubCategoryController.getSubCategoriesByParentId)

  app.post('/subcategory',
    SubCategoryController.createSubCategory)

  
}
