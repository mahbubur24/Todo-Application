import { useState } from "react";
export default function InputTodo({ addItem }) {
  const intialState = { id: "", data: "", isChecked: false };
  const [data, SetData] = useState(intialState);
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    SetData({
      ...data,
      [name]: value,
      isChecked: false,
      id: crypto.randomUUID(),
    });
  }
  function addTodo(e) {
    e.preventDefault();
    addItem(data);
    SetData(intialState);
  }
  return (
    <div>
      <form class="flex w-2/4 mx-auto gap-2">
        <input
          type="text"
          name="data"
          value={data.data}
          class="w-4/5 p-2 bg-zinc-100 rounded-lg outline-4 outline-offset-2 focus:outline-teal-400 caret-teal-500"
          onChange={handleInput}
        />
        <button
          type="submit"
          class="bg-teal-500 p-2 rounded-lg capitalize cursor-pointer text-white active:scale-95 w-1/5"
          onClick={addTodo}
        >
          add Todo
        </button>
      </form>
    </div>
  );
}
