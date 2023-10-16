import { Request, Response } from 'express-serve-static-core';
import { EventsModel } from '../models/events';

const errorHandler = (res: Response, errorObj: Error) =>
  res.status(400).send({ error: errorObj.message });

class EventsController {
  public static query(
    req: Request,
    res: Response
  ): Promise<Response<EventsModel>> {
    return EventsModel.findAll()
      .then((result) => res.status(200).send(result))
      .catch((error) => errorHandler(res, error));
  }

  public static get(
    req: Request,
    res: Response
  ): Promise<Response<EventsModel>> {
    return EventsModel.findByPk(req.params.id)
      .then((result) => {
        if (result) return res.status(200).send(result);
        return res.status(404).send({ Message: 'Event not found' });
      })
      .catch((error) => errorHandler(res, error));
  }

  public static create(req: Request, res: Response) {
    return EventsModel.create(req.body)
      .then((result) => res.status(201).send(result))
      .catch((error) => errorHandler(res, error));
  }

  public static delete(req: Request, res: Response) {
    return EventsModel.destroy({ where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch((error) => errorHandler(res, error));
  }
}

export { EventsController };
