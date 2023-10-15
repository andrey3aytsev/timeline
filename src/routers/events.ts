import express from 'express';
import { EventsController } from '../controllers/events';

const eventsRouter = express.Router();
eventsRouter.get('/', EventsController.query);
eventsRouter.post('/', EventsController.create);
eventsRouter.get('/:id', EventsController.get);
eventsRouter.delete('/:id', EventsController.delete);

export { eventsRouter };
