import express from 'express';
import documentRouter from './routes/document.routes'

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json())
app.use('/api', documentRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`))
