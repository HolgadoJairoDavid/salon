import express from 'express'
import { createService, getServices, getServiceById, updateService, deleteService } from '../controllers/servicesController.js'

const services = express.Router()

services.route('/')
    .post(createService)
    .get(getServices)

services.route('/:id')
    .get(getServiceById)
    .put(updateService)
    .delete(deleteService)

export default services