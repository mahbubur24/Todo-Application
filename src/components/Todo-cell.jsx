export default function TodoCell({ todoList, handleCheck, filteredTodo }) {
  if (filteredTodo) {
    todoList = filteredTodo;
  }
  return (
    <>
      {todoList.map((item, index) => (
        <div
          key={item.id}
          class="shadow p-4 m-2 flex gap-3 cursor-pointer hover:shadow-xl relative group/item"
        >
          <div>
            <input
              type="checkbox"
              checked={item.isChecked}
              class="w-4 h-4 accent-teal-500 rounded-lg cursor-pointer"
              onChange={() => handleCheck(item)}
            />
          </div>
          <div class="px-4">{index + 1}</div>
          <div class="`px-4" mx-4>
            {item.data}
          </div>
          <div class="flex gap-7 text-xl absolute right-10 invisible group-hover/item:visible">
            <i class="fa-solid fa-trash"></i>
          </div>
        </div>
      ))}
    </>
  );
}
