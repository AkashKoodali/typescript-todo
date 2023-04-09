import { Express, Request, Response } from "express";
import {addTodo, getTodo} from './controller/todo.controller'

function routes (app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
    
    app.get("/api/todo", getTodo);
    app.post("/api/todo", addTodo);
}

export default routes;