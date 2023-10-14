import RadioButton from "../../ui/RadioButton";
import CheckBox from "../../ui/CheckBox";

function QuestionAns({ questionObj, answer }) {
  const { question, type, options, required } = questionObj;

  return (
    <div className={`flex flex-col mt-9 p-3 shadow rounded-md bg-white`}>
      <p className="text-xl border-0 m-3">
        {question} {required && <span className="text-rose-500 px-1">*</span>}
      </p>

      {type === "short-ans" &&
        (answer ? (
          <p className="w-1/2 m-3 border-b-2 text-lg">{answer}</p>
        ) : (
          <p className="w-1/2 m-3 text-gray-500 text-lg border-b-2 italic">
            Question left blank
          </p>
        ))}

      {type === "long-ans" &&
        (answer ? (
          <p className="w-3/4 m-3 border-b-2 text-lg">{answer}</p>
        ) : (
          <p className="w-3/4 m-3 text-gray-500 text-lg border-b-2 italic">
            Question left blank
          </p>
        ))}

      <div className="m-3">
        {type === "multiple-choice" && (
          <div className="flex flex-col gap-3">
            {options.map((option, idx) => {
              return (
                <RadioButton
                  answer={answer}
                  option={option}
                  idx={idx}
                  key={idx}
                  disabled={true}
                  type={"show-ans"}
                />
              );
            })}
          </div>
        )}
        {type === "check-boxes" && (
          <div className="flex flex-col gap-3">
            {options.map((option, idx) => {
              return (
                <CheckBox
                  option={option}
                  idx={idx}
                  key={idx}
                  disabled={true}
                  answers={answer}
                  type={"show-ans"}
                />
              );
            })}
          </div>
        )}
        {type === "dropdown" && (
          <div className="flex">
            <button className="bg-indigo-500 text-white p-2 w-52 rounded-md ">
              <span>Select Answer</span>
              <span className="text-lg "> &#8595;</span>
            </button>
            <span className="self-center ml-6 text-lg border-b-2 border-indigo-600">
              {options[answer]}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionAns;
