import { useState } from "react";
import InputTodo from "./components/Input-todo";
import TodoBoard from "./components/Todo-board";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filterItem, setFilterItem] = useState(["all"]);
  function addItem(newTodoItem) {
    setTodos([...todos, newTodoItem]);
  }

  // handle todo check
  function handleCheck(item) {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== item.id) {
          return todo;
        } else {
          return { ...todo, isChecked: !todo.isChecked };
        }
      })
    );
  }

  // handle Filter todo by complete
  function handleFilter(status) {
    if (filterItem.includes(status)) {
      setFilterItem([...filterItem]);
    } else {
      setFilterItem([status]);
    }
  }

  return (
    <>
      <div className="w-full h-screen bg-no-repeat bg-center bg-cover bg-[url('./assets/images/bg.jpg')]">
        <div className="w-full h-screen bg-no-repeat bg-center bg-cover bg-gradient-to-r from-[#000000b9] to-[#000000b9]">
          <div className="container mx-auto p-6">
            <InputTodo addItem={addItem}></InputTodo>
            <TodoBoard
              todoList={todos}
              handleCheck={handleCheck}
              handleFilter={handleFilter}
              filterItem={filterItem}
            ></TodoBoard>
          </div>
        </div>
      </div>
    </>
  );
}
