import { BaseRoute } from '../../structures/BaseRouter';
import { Application, Request, Response } from 'express';
export class MainRoute extends BaseRoute {
  app: Application;
  constructor(app: Application, path?: string) {
    super(app, path);
    this.router.get('/', (req: Request, res: Response) => {
      res.send('Hello from MainRoute.');
    });
  }
}
