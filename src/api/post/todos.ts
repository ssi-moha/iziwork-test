import { AxiosResponse } from "axios";
import post from ".";

import { CreateTodoPayload, Todo } from "../../entities/Todo";
import { logCreatedTodo } from "../../utils";

export async function createTodo(
  newTodo: CreateTodoPayload,
  logs = true
): Promise<AxiosResponse<Todo>> {
  const response = await post<CreateTodoPayload, Todo>(
    process.env.API_URL,
    newTodo
  );

  if (logs === true) logCreatedTodo(response);

  return response;
}
