import express from 'express'
import { register, verifyAccount, login, user, forgotPassword, verifyPasswordResetToken, updatePassword, admin } from '../controllers/authController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const auth = express.Router()

// Rutas de autenticación y registro de usuarios

auth.post('/register', register)
auth.get('/verify/:token', verifyAccount)
auth.post('/login', login)
auth.post('/forgot-password', forgotPassword)
auth.route('/forgot-password/:token')
    .get(verifyPasswordResetToken)
    .post(updatePassword)

// Area Privada - Requiere un JWT 
auth.get('/user', authMiddleware, user )
auth.get('/admin', authMiddleware, admin )


export default auth