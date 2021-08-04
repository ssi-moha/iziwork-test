import { EntityWithID } from "../utils";

type TodoFields = {
  title: string;
  completed: boolean;
};

export type Todo = EntityWithID<TodoFields>;

export type CreateTodoPayload = Pick<Todo, "title"> & { completed: false };
