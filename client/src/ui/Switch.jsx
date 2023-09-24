import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleAcceptingStatus, toggleRequired } from "../store/slices/newForm";

function Switch({ questionIdx, startState, type, formId, setStatus }) {
  const [isOn, setIsOn] = useState(startState);
  const dispatch = useDispatch();

  async function toggleFormStatus() {
    setStatus(!isOn);
    setIsOn(!isOn);
    await toggleAcceptingStatus(formId);
  }

  useEffect(() => {
    if (type === "toggleRequired") {
      dispatch(toggleRequired(questionIdx));
    }
  }, [isOn, dispatch, questionIdx, type]);

  if (type === "toggleRequired") {
    return (
      <div
        onClick={() => setIsOn(!isOn)}
        className={`flex w-10 h-5  rounded-full  ${
          isOn ? "bg-indigo-500" : "bg-slate-600"
        } transition-all duration-300 ease-in-out`}
      >
        <span
          className={`h-5 w-5 bg-white rounded-full shadow-2xl cursor-pointer ${
            isOn && "ml-5"
          } hover:ring-8 ring-indigo-400 transition-all duration-300 ease-in-out`}
        ></span>
      </div>
    );
  }

  if (type === "toggleFormStatus") {
    return (
      <div
        onClick={() => toggleFormStatus()}
        className={`flex w-10 h-5  rounded-full  ${
          isOn ? "bg-indigo-500" : "bg-slate-600"
        } transition-all duration-300 ease-in-out`}
      >
        <span
          className={`h-5 w-5 bg-white rounded-full shadow-2xl cursor-pointer ${
            isOn && "ml-5"
          } hover:ring-8 ring-indigo-400 transition-all duration-300 ease-in-out`}
        ></span>
      </div>
    );
  }
}

export default Switch;
