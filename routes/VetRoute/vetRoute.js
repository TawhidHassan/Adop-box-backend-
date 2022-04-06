const express = require('express');
const VetController = require('../../controllers/vetController/VetController');
const authController = require('../../controllers/authController');
const router = express.Router();


// Protect all routes after this middleware
router.use(authController.protect );



router
    .route('/')
    .get(authController.restrictTo('admin', 'user'), VetController.getallVet)
    .post(authController.restrictTo('admin', 'user'), VetController.createVet);

router
    .route('/:id')
    .get(authController.restrictTo('admin', 'user'), VetController.getsingleVet)
    .patch(authController.restrictTo('admin', 'user'), VetController.updateVet)
    .delete(authController.restrictTo('admin', 'user'), VetController.deleteVet);
module.exports = router;