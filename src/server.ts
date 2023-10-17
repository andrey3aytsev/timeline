import express from 'express';
import { ENV } from './env';
import { eventsRouter } from './routers/events';

const app = express();
app.use(express.json());
app.use('/api/events', eventsRouter);

app.listen(ENV.serverPort, () =>
  console.log(`server started on port ${ENV.serverPort}`)
);
