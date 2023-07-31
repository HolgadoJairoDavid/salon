import Appointment from '../models/Appointment.js'
import { formatDate } from '../utils/index.js'
import { sendEmailNewAppointment } from '../emails/appointmentEmailService.js'
// acá deberían de venir los controllers
import createAppointment from '../controllers/appointmentControllers/createAppointment.js'

// creamos un turno
const createAppointmentHandler = async (req, res) => {
    const appointment = req.body
    const user = req.user
    try {
        await createAppointment(appointment, user)
        return res.status(201).json({
            msg: 'Tu Reservación se realizó correctamente'
        })
    } catch (error) {
        console.log(error)
    }
}

// exportamos los handlers

export {
    createAppointmentHandler,

}