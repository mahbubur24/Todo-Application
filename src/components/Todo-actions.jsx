const actionArray = [
  { id: 1, title: "all", stat: false },
  { id: 2, title: "complete", stat: false },
  { id: 3, title: "incomplete", stat: false },
];
export default function TodoActions({ handleFilter, counter, filterItem }) {
  return (
    <div className="flex justify-between items-center p-4 sticky bottom-0 left-0 w-full">
      <div className="text-teal-900 font-semibold">count = {counter}</div>
      <div className="text-sm">
        {actionArray.map((item) => (
          <span
            key={item.id}
            className={`uppercase  m-1 cursor-pointer ${
              item.title === filterItem[0] ? "font-bold text-teal-900" : ""
            }`}
            onClick={() => handleFilter(item.title)}
          >
            {item.title}
          </span>
        ))}
      </div>
    </div>
  );
}
