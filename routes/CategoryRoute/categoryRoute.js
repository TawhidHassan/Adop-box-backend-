const express = require('express');
const categoryController = require('./../../controllers/categoryController/CategoryController');
const authController = require('../../controllers/authController');
const router = express.Router();


// Protect all routes after this middleware
router.use(authController.protect );



router
    .route('/')
    .get(authController.restrictTo('admin', 'user'), categoryController.getallCategory)
    .post(authController.restrictTo('admin', 'user'), categoryController.createCategory);

router
    .route('/:id')
    .get(authController.restrictTo('admin', 'user'), categoryController.getsingleCategory)
    .patch(authController.restrictTo('admin', 'user'), categoryController.updateCategory)
    .delete(authController.restrictTo('admin', 'user'), categoryController.deleteCategory);
module.exports = router;