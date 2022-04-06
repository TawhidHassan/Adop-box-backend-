const express = require('express');
const PatBlogPostController = require('../../controllers/patBlogPostController/patBlogPostController');
const authController = require('../../controllers/authController');
const router = express.Router();


// Protect all routes after this middleware
router.use(authController.protect );



router
    .route('/')
    .get(authController.restrictTo('admin', 'user'), PatBlogPostController.getallPatBlogPost)
    .post(authController.restrictTo('admin', 'user'), PatBlogPostController.createPatBlogPost);

router
    .route('/:id')
    .get(authController.restrictTo('admin', 'user'), PatBlogPostController.getsinglePatBlogPost)
    .patch(authController.restrictTo('admin', 'user'), PatBlogPostController.updatePatBlogPost)
    .delete(authController.restrictTo('admin', 'user'), PatBlogPostController.deletePatBlogPost);
module.exports = router;