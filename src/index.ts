import { createTodo } from "./api/post/todos";
import setupEnv from "./setupEnv";
import extractDatafromSheet from "./sheet";
import { getHomeState, getTodoTitle } from "./utils";

setupEnv();

async function sendStudentsToApi() {
  const students = await extractDatafromSheet();

  students.forEach((student) => {
    if (getHomeState(student) === "NY")
      createTodo({ title: getTodoTitle(student), completed: false });
  });
}

sendStudentsToApi();
