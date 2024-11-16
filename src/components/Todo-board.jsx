import TodoActions from "./Todo-actions";
import TodoCell from "./Todo-cell";

export default function TodoBoard({
  todoList,
  handleCheck,
  handleFilter,
  filteredTodo,
}) {
  return (
    <div class="bg-[rgba(224,242,254,0.70)] p-8 rounded-lg w-11/12 mx-auto my-4">
      <h2 class="text-center text-2xl capitalize">Todo list</h2>

      <div class="h-[350px] overflow-auto relative bg-scroll">
        <div class="flex flex-col gap-1">
          <TodoCell
            todoList={todoList}
            handleCheck={handleCheck}
            filteredTodo={filteredTodo}
          ></TodoCell>
        </div>
      </div>

      <TodoActions
        todoList={todoList}
        handleFilter={handleFilter}
      ></TodoActions>
    </div>
  );
}
