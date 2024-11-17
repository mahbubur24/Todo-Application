export default function TodoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: state.isEdit
          ? state.todos.map((item) =>
              item.id === action.payload.id
                ? { ...item, title: action.payload.title }
                : item
            )
          : [...state.todos, action.payload],
        todoToEdit: null,
        isEdit: false,
      };

    case "EDIT_TODO":
      return { ...state, isEdit: true, todoToEdit: action.payload };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    case "TOGGLE_CHECK":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id !== action.payload.id
            ? todo
            : { ...todo, isChecked: !todo.isChecked }
        ),
      };

    case "SET_FILTER":
      return {
        ...state,
        filterItem: state.filterItem.includes(action.payload)
          ? [...state.filterItem]
          : [action.payload],
      };

    case "SET_EDIT":
      return { ...state, isEdit: action.payload };

    default:
      return state;
  }
}
