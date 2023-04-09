import { Express, Request, Response } from "express";
import bodyParser from 'body-parser';
import { addTodo, getTodos, updateTodo, deleteTodo } from "./controller/todo.controller";

function routes(app: Express) {
const jsonParser = bodyParser.json();

  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.get("/api/todos", getTodos);
  
  app.post("/api/add-todo",jsonParser, addTodo);

  app.put("/api/edit-todo/:id",jsonParser, updateTodo);

  app.delete('/api/delete-todo/:id', jsonParser, deleteTodo);

}

export default routes;
