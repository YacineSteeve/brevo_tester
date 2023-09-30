import express from 'express';
import dotenv from 'dotenv';

import { mailRouter } from './routers/mail.router.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/mail', mailRouter);

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.error('Error starting the server');
        console.error(error);
    }

    console.log('Server running on port', process.env.PORT);
});
