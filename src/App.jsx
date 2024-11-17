import { useReducer } from "react";
import InputTodo from "./components/Input-todo";
import TodoBoard from "./components/Todo-board";
import TodoReducer from "./reducers/TodoReducer";

export default function App() {
  /* const [todos, setTodos] = useState([]);
  const [filterItem, setFilterItem] = useState(["all"]);
  const [todoToEdit, setTodoToEdit] = useState(null);
  const [isEdit, setIsEdit] = useState(false); */
  //
  const initialState = {
    todos: [],
    filterItem: ["all"],
    todoToEdit: null,
    isEdit: false,
  };

  // convert to reducer
  const [todo, dispatch] = useReducer(TodoReducer, initialState);

  // add todo item
  function addItem(newTodoItem) {
    dispatch({ type: "ADD_TODO", payload: newTodoItem });
  }

  /* function addItem(newTodoItem) {
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
 */
  // handle todo mark as done
  function handleCheck(item) {
    dispatch({ type: "TOGGLE_CHECK", payload: item });
  }

  /* function handleCheck(item) {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== item.id) {
          return todo;
        } else {
          return { ...todo, isChecked: !todo.isChecked };
        }
      })
    );
  } */

  // handle Filter todo by complete
  function handleFilter(status) {
    dispatch({ type: "SET_FILTER", payload: status });
  }

  /*  function handleFilter(status) {
    if (filterItem.includes(status)) {
      setFilterItem([...filterItem]);
    } else {
      setFilterItem([status]);
    }
  } */
  // handle Delete Todo
  function handleDelete(item) {
    dispatch({ type: "DELETE_TODO", payload: item });
  }

  /* function handleDelete(item) {
    setTodos(todos.filter((todo) => todo.id !== item.id));
  } */
  //  handle edit Todo
  function handleEdit(item) {
    dispatch({ type: "EDIT_TODO", payload: item });
  }

  /* function handleEdit(item) {
    setIsEdit(true);
    setTodoToEdit(item);
  } */

  return (
    <>
      <div className="w-full h-screen bg-no-repeat bg-center bg-cover bg-[url('./assets/images/bg.jpg')]">
        <div className="w-full h-screen bg-no-repeat bg-center bg-cover bg-gradient-to-r from-[#000000b9] to-[#000000b9]">
          <div className="container mx-auto p-6">
            <InputTodo
              addItem={addItem}
              todoToEdit={todo.todoToEdit}
              isEdit={todo.isEdit}
            ></InputTodo>

            <TodoBoard
              todoList={todo.todos}
              handleCheck={handleCheck}
              handleFilter={handleFilter}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              filterItem={todo.filterItem}
            ></TodoBoard>
          </div>
        </div>
      </div>
    </>
  );
}
