import mongoose from "mongoose";

export interface TodoDocument extends mongoose.Document {
  title: string;
  status: 'completed' | 'uncompleted';
  createdAt: Date;
  updatedAt: Date;
}

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model<TodoDocument>("Todo", todoSchema);

export default Todo;
