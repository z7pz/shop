import express, { Application, Response, Request } from 'express';
import { MainRoute } from './Routes';
import reload from 'reload';
class API {
  app: Application;
  constructor() {
    this.app = express();

    this.app.listen(4000, () => {
      console.info('[API]: ONLINE');
    });

    new MainRoute(this.app, '/');
    reload(this.app);
  }
}

export default API;
