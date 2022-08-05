import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import "./styles.css";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

const user: User = {
  name: "まさとも",
  hobbies: ["テニス", "パソコン"]
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color={"red"} fontSize={"18px"} />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todos) => (
        <Todo
          key={todos.id}
          title={todos.title}
          userId={todos.userId}
          completed={todos.completed}
        />
      ))}
    </div>
  );
}
