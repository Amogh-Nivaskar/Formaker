import { useDispatch } from "react-redux";
import { changeType } from "../../store/slices/newForm";

// &#8628; down arrow

function SelectQuestionType({
  questionIdx,
  isSelectOpen,
  setIsSelectOpen,
  type,
}) {
  const dispatch = useDispatch();
  return (
    <div className="relative">
      <button
        className="bg-indigo-500 text-white p-1.5 w-52 rounded-md hover:bg-indigo-600"
        onClick={() => setIsSelectOpen(!isSelectOpen)}
      >
        {type ? (
          <p className="text-sm">
            {type === "short-ans" && <span>Short Answer</span>}
            {type === "long-ans" && <span>Long Answer</span>}
            {type === "multiple-choice" && <span>Multiple Choice</span>}
            {type === "check-boxes" && <span>Check Boxes</span>}
            {type === "dropdown" && <span>Dropdown</span>}
            <span className="text-sm "> &#8595;</span>
          </p>
        ) : (
          <p>
            <span className="text-sm"> Select Question Type</span>{" "}
            <span className="text-base "> &#8595;</span>
          </p>
        )}
      </button>
      <div
        className={`absolute bg-indigo-50 mt-2 left-0 right-0 ${
          isSelectOpen ? "flex flex-col" : "hidden"
        } `}
      >
        <ul className="text-sm">
          <li
            className="p-2 self-stretch hover:bg-indigo-400 hover:text-white cursor-pointer"
            onClick={() => {
              dispatch(changeType({ questionIdx, type: "short-ans" }));
              setIsSelectOpen(false);
            }}
          >
            Short Answer
          </li>
          <li
            className="p-2 self-stretch hover:bg-indigo-400 hover:text-white cursor-pointer"
            onClick={(e) => {
              dispatch(changeType({ questionIdx, type: "long-ans" }));
              setIsSelectOpen(false);
            }}
          >
            Long Answer
          </li>
          <li
            className="p-2 self-stretch hover:bg-indigo-400 hover:text-white cursor-pointer"
            onClick={(e) => {
              dispatch(changeType({ questionIdx, type: "multiple-choice" }));
              setIsSelectOpen(false);
            }}
          >
            Multiple Choice
          </li>
          <li
            className="p-2 self-stretch hover:bg-indigo-400 hover:text-white cursor-pointer"
            onClick={(e) => {
              dispatch(changeType({ questionIdx, type: "check-boxes" }));
              setIsSelectOpen(false);
            }}
          >
            Check Boxes
          </li>
          <li
            className="p-2 self-stretch hover:bg-indigo-400 hover:text-white cursor-pointer"
            onClick={(e) => {
              dispatch(changeType({ questionIdx, type: "dropdown" }));
              setIsSelectOpen(false);
            }}
          >
            DropDown
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SelectQuestionType;
