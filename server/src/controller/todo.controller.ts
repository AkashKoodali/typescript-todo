import { Request, Response } from "express";
import Todo from "../model/todo.model";
import { TodoDocument } from "../model/todo.model";

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: TodoDocument[] = await Todo.find();
    res.status(200).json({ todos });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      TodoDocument,
      "name" | "description" | "status"
    >;

    const todo: TodoDocument = new Todo({
      name: body.name,
      description: body.description,
      status: body.status,
    });

    const newTodo: TodoDocument = await todo.save();
    const allTodos: TodoDocument[] = await Todo.find();

    res
      .status(201)
      .json({ message: "Todo added", todo: newTodo, todos: allTodos });
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateTodo: TodoDocument | null = await Todo.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allTodos: TodoDocument[] = await Todo.find();
    res.status(200).json({
      message: "Todo updated",
      todo: updateTodo,
      todos: allTodos,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedTodo: TodoDocument | null = await Todo.findByIdAndRemove(
      req.params.id
    );
    const allTodos: TodoDocument[] = await Todo.find();
    res.status(200).json({
      message: "Todo deleted",
      todo: deletedTodo,
      todos: allTodos,
    });
  } catch (error) {
    throw error;
  }
};
