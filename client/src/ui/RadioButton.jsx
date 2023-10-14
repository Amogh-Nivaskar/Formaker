import { useDispatch, useSelector } from "react-redux";
import { getAns, setAns } from "../store/slices/ansForm";

function RadioButton({ ansIdx, option, idx, disabled = false, type, answer }) {
  let ans = useSelector(getAns(ansIdx));
  const dispatch = useDispatch();

  if (answer !== null && answer !== undefined) ans = answer;

  function handleClick() {
    if (ans === idx) {
      dispatch(setAns({ ansIdx, ans: undefined }));
    } else {
      dispatch(setAns({ ansIdx, ans: idx }));
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
        className={`h-6 w-6  flex rounded-full justify-center items-center border-2 border-indigo-500 ${
          !disabled && "hover:ring-8 cursor-pointer"
        } ring-indigo-300 transition-all duration-300 ease-in-out`}
      >
        {ans === idx && (
          <div className="h-3 w-3 rounded-full bg-indigo-500 transition-all duration-500 ease-in-out"></div>
        )}
      </div>
      {type === "show-ans" && (
        <p className="ml-4 text-lg cursor-default">
          {option || (
            <span className="italic text-slate-500">Empty Option</span>
          )}
        </p>
      )}
    </div>
  );
}

export default RadioButton;
