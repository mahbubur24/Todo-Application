export default function TodoCell({
  todoList,
  handleCheck,
  filterItem,
  handleCounter,
}) {
  // Get Filtered Data
  function filteredData(list) {
    if (filterItem.length === 0 || filterItem[0] === "all") return list;
    else if (filterItem[0] === "complete")
      return list.filter((item) => item.isChecked === true);
    else return list.filter((item) => item.isChecked !== true);
  }
  // Get print Item Counter
  function filteredDataCounter() {
    return filteredData(todoList).length;
  }
  // handle empty todo
  handleCounter(filteredDataCounter());
  if (!filteredDataCounter())
    return (
      <h1 className="pt-10 text-center font-bold text-red-600 text-lg">
        No todo added
      </h1>
    );
  return (
    <>
      {filteredData(todoList).map((item, index) => (
        <>
          <div
            key={item.id}
            className="shadow p-4 m-2 flex gap-3 cursor-pointer hover:shadow-xl relative group/item"
          >
            <div>
              <input
                type="checkbox"
                checked={item.isChecked}
                className="w-4 h-4 accent-teal-500 rounded-lg cursor-pointer"
                onChange={() => handleCheck(item)}
              />
            </div>
            <div className="px-4">{index + 1}</div>
            <div className="`px-4" mx-4>
              {item.data}
            </div>
            <div className="flex gap-7 text-xl absolute right-10 invisible group-hover/item:visible">
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
