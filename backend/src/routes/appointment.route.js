import express from 'express'
// acá deberían de ir los handlers
import { createAppointment, getAppointmentsByDate, getAppointmentById, updateAppointment, deleteAppointment } from '../controllers/appointmentController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const appointment = express.Router()

appointment.route('/')
    .post(authMiddleware, createAppointment)
    .get(authMiddleware, getAppointmentsByDate)

appointment.route('/:id')
    .get(authMiddleware, getAppointmentById)
    .put(authMiddleware, updateAppointment)
    .delete(authMiddleware, deleteAppointment)

export default appointment