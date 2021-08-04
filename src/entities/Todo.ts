export type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export type CreateTodoPayload = Pick<Todo, "title"> & { completed: false };
