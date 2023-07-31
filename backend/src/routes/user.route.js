import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { getUserAppointments } from '../controllers/userController.js'

const user = express.Router()

user.route('/:user/appointments')
    .get(authMiddleware, getUserAppointments)

export default user