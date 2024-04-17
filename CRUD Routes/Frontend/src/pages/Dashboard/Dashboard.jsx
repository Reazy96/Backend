import { useEffect, useState } from "react";
import TodoList from "../../components/TodoList/TodoList";

const Dashboard = () => {
  const [saveFetch, setSaveFetch] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1234/api/v1/todos")
      .then((res) => res.json())
      .then((data) => {
        setSaveFetch(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <TodoList id={saveFetch} />
    </main>
  );
};

export default Dashboard;
