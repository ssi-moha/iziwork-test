import { createTodo } from "./api/post/todos";
import setupEnv from "./setupEnv";
import extractDatafromSheet from "./sheet";
import { getTodoTitle, STUDENT_NAME } from "./utils";

setupEnv();

async function sendStudentsToApi() {
  const students = await extractDatafromSheet();

  students.forEach((student) => {
    if (student[STUDENT_NAME])
      createTodo({ title: getTodoTitle(student), completed: false });
  });
}

sendStudentsToApi();
