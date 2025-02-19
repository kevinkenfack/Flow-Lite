import express from 'express';
import cors from 'cors'
import morgan from 'morgan'
import routes from './routes/router.js';
import errorHandler from './middleware/errorHandler.js';
import 'dotenv/config'

// Create main app
const app = express()

// Middleware
app.use(cors({
  origin: [process.env.FRONTEND_URL]
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(errorHandler)

// Routes
app.get('/', (_, res) => res.send("FlowLite server") )
app.use('/api', routes)

export default app