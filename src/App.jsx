import { useState } from "react";
import InputTodo from "./components/Input-todo";
import TodoBoard from "./components/Todo-board";

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodo, setFilteredTodo] = useState(null);
  function addItem(newTodoItem) {
    setTodos([...todos, newTodoItem]);
  }

  function handleCheck(item) {
    let temp;
    if (filteredTodo) {
      temp = filteredTodo;
    } else {
      temp = todos;
    }
    setTodos(
      temp.map((todo) => {
        if (todo.id !== item.id) {
          return todo;
        } else {
          return { ...todo, isChecked: !todo.isChecked };
        }
      })
    );
  }

  function handleFilter(status) {
    if (status === "all") {
      setFilteredTodo([...todos]);
    }
    if (status === "complete") {
      setFilteredTodo(
        todos.filter((item) => {
          return item.isChecked === true;
        })
      );
    }
    if (status === "incomplete") {
      setFilteredTodo(
        todos.filter((item) => {
          return item.isChecked === false;
        })
      );
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
              filteredTodo={filteredTodo}
            ></TodoBoard>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
