import { useState } from "react";

export const Counterhook = () => {
  const [countTask, setCountTask] = useState([]);
  const [count, setCount] = useState(0);
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;

  let messages = "";
  const CounterToggler = (event) => {
    if (event === "increase") {
      setCount(count + 1);
    } else if (event === "decrease") {
      setCount(count - 1);
    } else if (event === "reset") {
      setCount(0);
    }
  };

  const SaveCount = () => {
    const CountTask = {
      id: countTask.length === 0 ? 1 : countTask[countTask.length - 1].id + 1,
      taskname: count,
      date: currentDate,
    };
    setCountTask([...countTask, CountTask]);
  };

  if (count >= 5) {
    messages = "nakaka lima na ikaw";
  }

  return {
    count,
    CounterToggler,
    countTask,
    SaveCount,
    messages,
  };
};
