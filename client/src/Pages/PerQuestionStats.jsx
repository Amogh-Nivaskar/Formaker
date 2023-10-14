import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  getForm,
  getOptionsFreq,
  getQuestionIdx,
  setQuestionIdx,
} from "../store/slices/viewSubmissions";
import ShowCharts from "../Components/PreviewSubmission.jsx/ShowCharts";

function PerQuestionStats() {
  const form = useSelector(getForm);
  const { questions, ansForms } = form;
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const questionIdx = useSelector(getQuestionIdx);
  const freq = useSelector(getOptionsFreq(questionIdx));
  const currentQuestion = questions[questionIdx];
  const dispatch = useDispatch();

  if (form.ansForms.length === 0) {
    return (
      <span className="text-2xl pr-16 text-indigo-500 w-full flex justify-center items-center">
        No Responses Yet
      </span>
    );
  }

  return (
    <div className=" flex flex-col justify-center items-center relative pb-32">
      <div className="w-3/4">
        <div className="relative">
          <button
            onClick={() => setIsSelectOpen(!isSelectOpen)}
            className="bg-indigo-200 w-3/4 text-indigo-900 p-2 rounded-md hover:bg-indigo-400"
          >
            <div className="flex justify-between items-center">
              <span className="text-lg">
                {questionIdx + 1}. {currentQuestion.question}
              </span>
              <span className="text-lg ">
                <AiOutlineDown />
              </span>
            </div>
          </button>

          {isSelectOpen && (
            <div className="border-2 border-indigo-500 max-h-45 overflow-y-auto fixed">
              {questions.map((questionObj, idx) => {
                return (
                  <div
                    onClick={() => {
                      dispatch(setQuestionIdx(idx));
                      setIsSelectOpen(false);
                    }}
                    key={idx}
                    className="p-2 cursor-pointer bg-indigo-500 text-slate-100 text-lg hover:bg-indigo-200 hover:text-indigo-900"
                  >
                    {idx + 1}. {questionObj.question}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="w-3/4 flex flex-col gap-3 my-6">
        {(currentQuestion.type === "short-ans" ||
          currentQuestion.type === "long-ans") &&
          ansForms.map((ansForm, idx) => {
            return (
              <div
                className=" py-3 text-xl bg-white rounded-lg shadow-md"
                key={idx}
              >
                {ansForm[questionIdx] ? (
                  <p className="p-3">{ansForm[questionIdx]}</p>
                ) : (
                  <p className="p-3 text-gray-500 italic">
                    Question left blank
                  </p>
                )}
              </div>
            );
          })}
      </div>

      {currentQuestion.type === "multiple-choice" && (
        <ShowCharts
          labels={currentQuestion.options}
          answersFreq={freq}
          chartLabel={currentQuestion.question}
        />
      )}

      {currentQuestion.type === "check-boxes" && (
        <ShowCharts
          labels={currentQuestion.options}
          answersFreq={freq}
          chartLabel={currentQuestion.question}
        />
      )}

      {currentQuestion.type === "dropdown" && (
        <ShowCharts
          labels={currentQuestion.options}
          answersFreq={freq}
          chartLabel={currentQuestion.question}
        />
      )}

      <div className="flex justify-center items-center gap-6 m-5 fixed bottom-0 bg-indigo-300 p-2 rounded-full ">
        <button
          disabled={questionIdx === 0}
          onClick={() => dispatch(setQuestionIdx(questionIdx - 1))}
          className={`px-2 py-1 text-lg font-bold rounded-full ${
            questionIdx === 0
              ? "text-black bg-indigo-50 border-1 border-indigo-500"
              : "text-white  bg-indigo-500 hover:ring-8"
          }  ring-indigo-300 transition-all duration-300 ease-in-out`}
        >
          &larr;
        </button>
        <span className="text-lg text-white font-bold">
          {questionIdx + 1} / {questions.length}
        </span>
        <button
          disabled={questionIdx === questions.length - 1}
          onClick={() => dispatch(setQuestionIdx(questionIdx + 1))}
          className={`px-2 py-1 text-lg font-bold rounded-full ${
            questionIdx === questions.length - 1
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

export default PerQuestionStats;
