import Question from "../Components/QuestionForm/Question";
import { useDispatch, useSelector } from "react-redux";
import {
  activateDescription,
  activateTitle,
  addQuestionObj,
  getForm,
  getQuestions,
  getRefinedForm,
  postRefinedForm,
  resetForm,
  updateDescription,
  updateTitle,
} from "../store/slices/newForm";
import { useNavigate } from "react-router-dom";
import { BsPlusCircleDotted } from "react-icons/bs";
import Button from "../ui/Button";
import { useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { useAuth } from "../contexts/UserAuth";

const initialQuestion = {
  question: "",
  type: "",
  options: [],
  required: false,
};

function NewForm() {
  const dispatch = useDispatch();
  const { authUser } = useAuth();
  const questions = useSelector(getQuestions);
  const form = useSelector(getForm);
  const { title, description, active } = form;
  const navigate = useNavigate();
  const [msg, setMsg] = useState(null);

  async function handleCreatingForm(form) {
    if (title !== "") {
      const refinedForm = getRefinedForm(form);
      const res = await postRefinedForm(refinedForm);
      if (res.status === 200) {
        dispatch(resetForm());
        navigate("/dashboard");
      }
      if (res.status === 401) {
        await authUser();
      }
    } else {
      setMsg("Title is necessary to create the form");
    }
  }

  return (
    <div className="flex items-center justify-center w-screen">
      <div className="  w-4/6">
        <div className="text-2xl text-indigo-500 font-semibold mb-3">
          Make Form
        </div>
        <div className="border-2 border-indigo-100 rounded-md my-3">
          <div
            onClick={() => {
              dispatch(activateTitle());
            }}
          >
            {active.title ? (
              <input
                className="h-16 w-full py-3 bg-indigo-100 border-b-2 border-indigo-600 text-2xl  my-6 focus: outline-none placeholder:text-2xl "
                style={{
                  borderLeft: "2px solid transparent",
                  borderRight: "2px solid transparent",
                  borderTop: "2px solid transparent",
                }}
                value={title}
                placeholder="Enter Form Title"
                onChange={(e) => dispatch(updateTitle(e.target.value))}
              />
            ) : (
              <p
                className="h-16 py-3 text-2xl my-6"
                style={{ border: "2px solid transparent" }}
              >
                {title || (
                  <span className="text-slate-400">Enter Form Title</span>
                )}
              </p>
            )}
          </div>

          <div
            onClick={() => {
              dispatch(activateDescription());
            }}
          >
            {active.description ? (
              <input
                className="h-10 w-full py-3 bg-indigo-100 border-b-2 border-indigo-600 text-xl  my-6 mb-14 focus: outline-none placeholder:text-xl"
                style={{
                  borderLeft: "2px solid transparent",
                  borderRight: "2px solid transparent",
                  borderTop: "2px solid transparent",
                }}
                value={description}
                placeholder="Enter Form Description"
                onChange={(e) => dispatch(updateDescription(e.target.value))}
              />
            ) : (
              <p
                className="h-10 py-3 text-xl my-6 mb-14"
                style={{ border: "2px solid transparent" }}
              >
                {description || (
                  <span className="text-slate-400">Enter Form Description</span>
                )}
              </p>
            )}
          </div>
        </div>

        {questions.map((q, idx) => {
          return <Question questionObj={q} questionIdx={idx} key={idx} />;
        })}

        <div className="flex flex-col items-end">
          <button
            className="mt-3 p2 rounded-full hover:ring-8 ring-indigo-300 transition-all duration-300 ease-in-out"
            onClick={() => {
              dispatch(
                addQuestionObj({
                  newQuestion: initialQuestion,
                })
              );
            }}
          >
            <BsPlusCircleDotted fontSize={"2rem"} color="rgb(99 102 241)" />
          </button>
          <div className="self-start flex">
            <Button
              classes={" hover:ring-8 ring-indigo-200"}
              onClick={() => handleCreatingForm(form)}
              type="submit"
            >
              Create Form
            </Button>
            {msg && (
              <span className="text-xl text-rose-500 pl-3 flex items-center ">
                <BsExclamationCircle />
                <p className="ml-2">{msg}</p>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewForm;
