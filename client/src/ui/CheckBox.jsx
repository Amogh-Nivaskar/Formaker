function CheckBox({ option, idx, selected, setSelected, disabled, answers }) {
  let isSelected;
  if (disabled) {
    isSelected = answers?.includes(idx);
  } else {
    isSelected = selected?.includes(idx);
  }

  function handleClick() {
    if (selected.includes(idx)) {
      setSelected((selected) => selected.filter((s) => s !== idx));
    } else {
      setSelected((selected) => [...selected, idx]);
    }
  }
  return (
    <div
      className="flex"
      onClick={() => {
        if (!disabled) {
          handleClick();
        }
      }}
    >
      <div
        className={`h-6 w-6  ${
          isSelected && "bg-indigo-400"
        } flex border-2 border-indigo-500 rounded-md justify-center items-center ${
          !disabled && "hover:ring-8 cursor-pointer"
        } ring-indigo-300 transition-all duration-300 ease-in-out`}
      >
        {isSelected && (
          <span className="text-md text-white font-semibold ">&#10003;</span>
        )}
      </div>
      <p className="ml-4 text-lg cursor-default">
        {option || <span className="italic text-slate-500">Empty Option</span>}
      </p>
    </div>
  );
}

export default CheckBox;
