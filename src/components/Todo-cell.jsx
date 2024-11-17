import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import Alert from "./Alert";

export default function TodoCell({
  todoList,
  handleCheck,
  filterItem,
  handleCounter,
  handleDelete,
  handleEdit,
}) {
  const [showAlert, setShowAlert] = useState(false);
  const [showDeleteDialogueItem, setShowDeleteDialogueItem] = useState(null);
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
  // show delete confirmation
  function showDeleteConfirmation(flag, item = {}) {
    flag === "show" ? setShowAlert(true) : setShowAlert(false);
    setShowDeleteDialogueItem(item);
  }

  // handle empty todo
  handleCounter(filteredDataCounter());
  if (!filteredDataCounter())
    return (
      <h1 className="pt-10 text-center font-bold text-teal-800 text-3xl">
        No Todo Found
      </h1>
    );
  return (
    <>
      {filteredData(todoList).map((item, index) => (
        <>
          <div className="w-1/2   mx-auto">
            {showAlert && showDeleteDialogueItem.id === item.id && (
              <Alert
                handleDelete={handleDelete}
                handleDeleteConfirmation={showDeleteConfirmation}
                item={item}
              ></Alert>
            )}
          </div>
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
              {item.title}
            </div>
            <div className="flex text-teal-900 gap-7 text-xl absolute right-10 invisible group-hover/item:visible">
              <IoMdTrash onClick={() => showDeleteConfirmation("show", item)} />
              <FaRegEdit onClick={() => handleEdit(item)} />
            </div>
          </div>
        </>
      ))}
    </>
  );
}
