import { AxiosResponse } from "axios";
import post from ".";

import { CreateTodoPayload, Todo } from "../../entities/Todo";

export async function createTodo(
  newTodo: CreateTodoPayload
): Promise<AxiosResponse<Todo>> {
  const response = await post<CreateTodoPayload, Todo>(
    process.env.API_URL,
    newTodo
  );

  console.log({ response: { status: response.status, data: response.data } });

  return response;
}
