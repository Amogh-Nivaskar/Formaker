import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <main>
      <section className="flex justify-center w-screen">
        <div className=" flex flex-col gap-y-8">
          <p className="text-5xl font-bold text-indigo-600">
            Create And Share Forms Easily !!
          </p>
          <div className="bg-indigo-500 text-lg text-slate-100 p-3 flex justify-center rounded-md cursor-pointer hover:text-xl hover:font-bold active:bg-indigo-200 active:text-indigo-500 transition-all ease-in-out duration-300">
            <Link to={"/dashboard"}>
              <span>Let's get started &#10140;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="flex justify-center flex-col items-center gap-16 py-16">
        <div className="flex w-3/4">
          <p className="flex items-center justify-center font-bold text-2xl text-indigo-500 w-1/2 ">
            Create forms with different types of questions
          </p>

          <div className=" shadow-lg w-full ">
            <img src="Create_Form5.jpg" alt="Create Form" />
          </div>
        </div>

        <div className="flex w-3/4">
          <div className=" shadow-lg w-full ">
            <img src="Send_Email.jpg" alt="Send Email" />
          </div>

          <p className="flex items-center justify-center font-bold text-2xl text-indigo-500 w-1/2 ">
            Share form link via Email
          </p>
        </div>

        <div>
          <p className="font-bold text-2xl text-indigo-500">View Respones</p>
        </div>

        <div className="flex w-3/4">
          <p className="flex items-center justify-center font-bold text-2xl text-indigo-500 w-1/2 ">
            Per Individual Response
          </p>
          <div className=" shadow-lg w-full ">
            <img
              src="Per_Response.jpg"
              alt="View Responses per individual response"
            />
          </div>
        </div>

        <div className="flex w-3/4">
          <div className=" shadow-lg w-full ">
            <img
              src="Per_Question.jpg"
              alt="View Responses per individual question"
            />
          </div>

          <p className="flex items-center justify-center font-bold text-2xl text-indigo-500 w-1/2 ">
            Per Individual Question
          </p>
        </div>
      </section>

      <div className="bg-indigo-700 h-40 flex justify-center items-center">
        <Link to={"/dashboard"}>
          <div className="flex justify-center items-center">
            <p className="text-slate-100 text-3xl font-bold">
              Start making your first form today !!
            </p>
            <span className="text-slate-100 text-3xl font-bold pl-3">
              <FaExternalLinkAlt />
            </span>
          </div>
        </Link>
      </div>
    </main>
  );
}

export default LandingPage;
