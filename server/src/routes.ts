import { Express, Request, Response } from "express";
import bodyParser from 'body-parser';
import { addTodo, getTodo, getTodos, updateTodo, removeTodo } from "./controller/todo.controller";

function routes(app: Express) {
const jsonParser = bodyParser.json();

  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.get("/api/todo/:id", getTodo);

  app.get("/api/todos", getTodos);
  
  app.post("/api/todo",jsonParser, addTodo);

  app.put("/api/update-todo/:id",jsonParser, updateTodo);

  app.delete('/api/remove-todo/:id', jsonParser, removeTodo);

}

export default routes;
