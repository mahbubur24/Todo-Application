import { useState } from "react";
import Alert from "./components/Alert";
import InputTodo from "./components/Input-todo";
import TodoBoard from "./components/Todo-board";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filterItem, setFilterItem] = useState(["all"]);
  const [todoToEdit, setTodoToEdit] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  // add todo item
  function addItem(newTodoItem) {
    if (isEdit) {
      setTodos(
        todos.map((item) => {
          if (item.id === newTodoItem.id) {
            return { ...item, title: newTodoItem.title };
          } else return item;
        })
      );
    } else setTodos([...todos, newTodoItem]);
    setTodoToEdit(null);
    setIsEdit(false);
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
  // handle Delete Todo
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo.id !== item.id));
  }
  //  handle edit Todo
  function handleEdit(item) {
    setIsEdit(true);
    setTodoToEdit(item);
  }

  return (
    <>
      <div className="w-full h-screen bg-no-repeat bg-center bg-cover bg-[url('./assets/images/bg.jpg')]">
        <div className="w-full h-screen bg-no-repeat bg-center bg-cover bg-gradient-to-r from-[#000000b9] to-[#000000b9]">
          <div className="container mx-auto p-6">
            <InputTodo
              addItem={addItem}
              todoToEdit={todoToEdit}
              isEdit={isEdit}
            ></InputTodo>
            
            <TodoBoard
              todoList={todos}
              handleCheck={handleCheck}
              handleFilter={handleFilter}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              filterItem={filterItem}
            ></TodoBoard>
          </div>
        </div>
      </div>
    </>
  );
}
