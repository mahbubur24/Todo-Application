import { useState } from "react";
import TodoActions from "./Todo-actions";
import TodoCell from "./Todo-cell";

export default function TodoBoard({
  todoList,
  handleCheck,
  handleFilter,
  filterItem,
}) {
  const [counter, setCounter] = useState(0);
  // count todo by filter
  function handleCounter(value) {
    setCounter(value);
  }
  return (
    <div className="bg-[rgba(224,242,254,0.70)] p-8 rounded-lg w-11/12 mx-auto my-4">
      <h2 className="text-center text-2xl capitalize">Todo list</h2>

      <div className="h-[350px] overflow-auto relative bg-scroll">
        <div className="flex flex-col gap-1">
          <TodoCell
            handleCounter={handleCounter}
            todoList={todoList}
            handleCheck={handleCheck}
            filterItem={filterItem}
          ></TodoCell>
        </div>
      </div>

      <TodoActions
        filterItem={filterItem}
        todoList={todoList}
        counter={counter}
        handleFilter={handleFilter}
      ></TodoActions>
    </div>
  );
}
