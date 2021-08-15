import express, { Application, Response, Request } from "express";
import reload from "reload";
class API {
  app: Application;
  constructor() {
    this.app = express();

    this.app.get("/", (req: Request, res: Response) => {
      res.send("I wdasnt to be a good man");
    });
    this.app.listen(4000, () => {
      console.info("[API]: ONLINE");
    });
    reload(this.app);
  }
}

export default API;
