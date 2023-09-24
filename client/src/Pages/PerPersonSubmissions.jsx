import { useEffect, useState } from "react";
import QuestionAns from "../Components/PreviewSubmission.jsx/QuestionAns";
import {
  getForm,
  getResponseIdx,
  setResponseIdx,
} from "../store/slices/viewSubmissions";
import { useDispatch, useSelector } from "react-redux";

function PerPersonSubmissions() {
  const form = useSelector(getForm);
  const responseIdx = useSelector(getResponseIdx);

  const [idx, setIdx] = useState(responseIdx + 1);
  const dispatch = useDispatch();
  const { title, description, questions, ansForms } = form;
  const answers = ansForms[responseIdx];

  useEffect(() => {
    if (idx) {
      if (0 < idx && idx <= ansForms.length) {
        dispatch(setResponseIdx(idx - 1));
      } else {
        dispatch(setResponseIdx(0));
        setIdx(1);
      }
    }
  }, [idx, ansForms.length, dispatch]);

  if (form.ansForms.length === 0) {
    return (
      <span className="text-2xl pr-16 text-indigo-500 w-full flex justify-center items-center">
        No Responses Yet
      </span>
    );
  }

  function calcWidth(s) {
    const w = (10 * s.toString().length).toString();
    console.log(w);
    return w;
  }

  return (
    <div className=" flex flex-col justify-center items-center relative pb-32">
      <div className="w-3/4">
        <p
          className="h-16  text-3xl  font-semibold"
          style={{ border: "2px solid transparent" }}
        >
          {title}
        </p>
        {description && (
          <p
            className="h-10 text-xl mb-14"
            style={{ border: "2px solid transparent" }}
          >
            {description}
          </p>
        )}
        {questions.map((question, idx) => {
          return (
            <QuestionAns
              key={idx}
              questionObj={question}
              answer={answers[idx]}
            />
          );
        })}
      </div>
      <div className="flex justify-between items-center gap-6 m-5 fixed bottom-0 bg-indigo-300 p-2 rounded-full ">
        <button
          disabled={responseIdx === 0}
          onClick={() => setIdx((idx) => idx - 1)}
          className={`px-2 py-1 text-lg font-bold rounded-full ${
            responseIdx === 0
              ? "text-black bg-indigo-50 border-1 border-indigo-500"
              : "text-white  bg-indigo-500 hover:ring-8"
          }  ring-indigo-300 transition-all duration-300 ease-in-out`}
        >
          &larr;
        </button>

        <div className=" font-bold w-full flex text-white justify-between items-center">
          <input
            type="number"
            // defaultValue={responseIdx + 1}
            placeholder={responseIdx + 1}
            value={idx}
            className="focus:outline-none w-3 bg-indigo-300 rounded-lg text-lg text-white font-bold appearance-none placeholder:text-indigo-500"
            style={{
              width: `${idx.toString().length > 0 ? calcWidth(idx) : 15}px`,
            }}
            onChange={(e) => {
              setIdx(e.target.value);
            }}
          />
          <span className="px-[5px]"> /</span>
          <span>{ansForms.length}</span>
        </div>

        <button
          disabled={responseIdx === ansForms.length - 1}
          onClick={() => setIdx((idx) => idx + 1)}
          className={`px-2 py-1 text-lg font-bold rounded-full ${
            responseIdx === ansForms.length - 1
              ? "text-black bg-indigo-50 border-1 border-indigo-500"
              : "text-white  bg-indigo-500 hover:ring-8"
          }  ring-indigo-300 transition-all duration-300 ease-in-out`}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default PerPersonSubmissions;
