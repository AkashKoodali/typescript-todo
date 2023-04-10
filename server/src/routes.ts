import { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import {
  addTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "./controller/todo.controller";

function routes(app: Express) {
  const jsonParser = bodyParser.json();

  /**
   * @openapi
   * /healthcheck:
   *  get:
   *      tags:
   *      - Healthcheck
   *      description: Responds if the app is up and running
   *      responses:
   *        200:
   *          description: App is up and running
   */
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  /**
   * @openapi
   * /api/todos:
   *  get:
   *      tags:
   *      - Todos
   *      summary: Get all todos
   *      description: Success
   *      responses:
   *        200:
   *          description: Get all todos successfully
   *        400:
   *          description: Somthing went wrong
   */
  app.get("/api/todos", getTodos);

  app.post("/api/add-todo", jsonParser, addTodo);

  app.put("/api/edit-todo/:id", jsonParser, updateTodo);

  app.delete("/api/delete-todo/:id", jsonParser, deleteTodo);
}

export default routes;
