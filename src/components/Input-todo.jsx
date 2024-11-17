import { useState } from "react";

export default function InputTodo({ addItem, isEdit, todoToEdit }) {
  const intialState = todoToEdit ?? { id: "", title: "", isChecked: false };
  const [data, SetData] = useState(intialState);
  const [isBlank, setIsBlank] = useState(false);

  // handle todo edit
  if (isEdit && todoToEdit && todoToEdit.id !== data.id) {
    SetData(todoToEdit);
  }

  // handle onChange of input Field
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    SetData({
      ...data,
      [name]: value,
      isChecked: false,
      id: isEdit ? todoToEdit.id : crypto.randomUUID(),
    });
    setIsBlank(false);
  }

  // empty input check
  function addTodo(e) {
    e.preventDefault();
    if (data.title.length === 0) {
      setIsBlank(true);
    } else {
      addItem(data);
      SetData({ id: "", title: "", isChecked: false });
    }
  }

  return (
    <div className="text-center">
      <form className="flex w-2/4 mx-auto gap-2">
        <input
          type="text"
          name="title"
          value={data.title}
          className={`w-4/5 p-2 bg-zinc-100 rounded-lg outline-4 outline-offset-2 focus:outline-teal-400 caret-teal-500 `}
          onChange={handleInput}
        />

        <button
          type="submit"
          className="bg-teal-500 p-2 rounded-lg capitalize cursor-pointer text-white active:scale-95 w-1/5"
          onClick={addTodo}
        >
          {isEdit ? "Update Todo" : "Add Todo"}
        </button>
      </form>
      {isBlank && <h5 className="text-red-600">Please add a todo item.</h5>}
    </div>
  );
}
