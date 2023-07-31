import Appointment from '../models/Appointment.js'
import { formatDate } from '../utils/index.js'
import { sendEmailNewAppointment } from '../emails/appointmentEmailService.js'


const createAppointment = async (appointment, user) => {
        appointment.user = user._id.toString()
        const newAppointment = new Appointment(appointment)
        const result = await newAppointment.save()

        await sendEmailNewAppointment({
            date: formatDate( result.date ),
            time: result.time
        })
}

export default createAppointment