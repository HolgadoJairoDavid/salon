import colors from 'colors'
// vamos a importarnos app
import { db } from './src/config/db.js'
import app from './src/app.js'
const PORT = process.env.PORT || 4000

// arrancar la app
db()
app.listen(PORT, () => {
    console.log( colors.blue( 'El servidor se esta ejecutando en el puerto:'), colors.blue.bold(PORT ))
})
