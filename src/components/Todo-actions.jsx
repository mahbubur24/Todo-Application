export default function TodoActions({ handleFilter }) {
  return (
    <div class="flex justify-between items-center p-4 sticky bottom-0 left-0 w-full">
      <div class="text-teal-900">count =10</div>
      <div class="text-sm">
        <span
          class="uppercase m-1 cursor-pointer"
          onClick={() => handleFilter("all")}
        >
          All
        </span>
        <span
          class="uppercase m-1 cursor-pointer"
          onClick={() => handleFilter("complete")}
        >
          complete
        </span>
        <span
          class="uppercase m-1 cursor-pointer"
          onClick={() => handleFilter("incomplete")}
        >
          Incomplete
        </span>
      </div>
    </div>
  );
}
