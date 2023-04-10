import mongoose from "mongoose";

export interface TodoDocument extends mongoose.Document {
  name: string;
  description: string;
  status: boolean;
}

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model<TodoDocument>("Todo", todoSchema);

export default Todo;
