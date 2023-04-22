import express from 'express';
import documentRouter from './routes/document.routes'
import specificationRouter from './routes/specification.routes'

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json())
app.use('/api', documentRouter)
app.use('/api', specificationRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`))
