import { Router } from "express";
import appointment from "./appointment.route.js";
import auth from "./auth.route.js";
import services from "./services.route.js";
import user from "./user.route.js";

const router = Router()
router.use('/api/appointments', appointment)
router.use('/api/auth', auth)
router.use('/api/services', services)
router.use('/api/users', user)
export default router