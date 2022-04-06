const express = require('express');
const adoptionPostController = require('../../controllers/adoptionPostController/adoptionPostController');
const authController = require('../../controllers/authController');
const router = express.Router();


// Protect all routes after this middleware
router.use(authController.protect );



router
    .route('/')
    .get(authController.restrictTo('admin', 'user'), adoptionPostController.getallAdoptionPost)
    .post(authController.restrictTo('admin', 'user'), adoptionPostController.createAdoptionPost);

router
    .route('/:id')
    .get(authController.restrictTo('admin', 'user'), adoptionPostController.getsingleAdoptionPost)
    .patch(authController.restrictTo('admin', 'user'), adoptionPostController.updateAdoptionPost)
    .delete(authController.restrictTo('admin', 'user'), adoptionPostController.deleteAdoptionPost);
module.exports = router;