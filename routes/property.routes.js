import express from "express";

import {
  getAllProperties,
  getAllPropertyDetails,
  createProperty,
  deleteProperty,
  updateProperty
} from '../controllers/property.controller.js';

const router = express.router();

router.route('/').get(getAllProperties);
router.route('/:id').get(getAllPropertyDetails);
router.route('/').post(createProperty);
router.route('/:id').patch(updateProperty);
router.route('/:id').get(deleteProperty);

export default router;