import express from "express"
export const router = express.Router();
import * as photoControllers from '../controllers/photos.js'

/* GET home page. */
router.get('/',photoControllers.mainPage);

router
    .route('/add-photo')
    .get(photoControllers.addPhoto)
    .post(photoControllers.doAddPhoto)



