import useHttp from "../../hooks/use-http";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskReq } = useHttp();

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name;
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendTaskReq(
      {
        url: "https://react-http-5ee05-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { text: taskText },
      },
      //bind 함수는 함수를 사전 구성할 수 있게 해줌, 함수를 바로 실행하지는 않지만 디폴트 자바스크립트 메서드로서 어떤 함수 객체에 대해서도 사전 구성 목적으로 사용할 수 있음
      //첫번째 인자 : 실행 예정인 함수에서 키워드를 설정할 수 있게 해줌
      //두번째 인자 : 호출 예정인 함수의 첫번째 인자 설정
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
