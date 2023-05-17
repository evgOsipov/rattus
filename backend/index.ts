import dotenv from 'dotenv';
import express from 'express';

import documentRouter from './routes/document.routes'
import reportRouter from './routes/report.routes'
import specificationRouter from './routes/specification.routes'
import { prepareDatabase } from './prepareDatabase';

(async () => {
    dotenv.config();
    await prepareDatabase();

    const PORT = process.env.PORT || 3334;
    const app = express();

    app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        next();
    });

    app.use(express.json())
    app.use('/api', documentRouter)
    app.use('/api', specificationRouter)
    app.use('/api', reportRouter)

    app.listen(PORT, () => console.log(`Server started on port ${PORT}...`))
})();
