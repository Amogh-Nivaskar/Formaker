import { Link } from "react-router-dom";

function Submitted() {
  return (
    <div>
      <div className="flex justify-center items-center p-6">
        <span className="ml-12 text-indigo-500  text-4xl transition-colors duration-300 ease-in-out hover:text-indigo-700 ">
          <Link to="/app">
            <span className="font-pacifico">Formaker</span>
          </Link>
        </span>
      </div>

      <div className="flex h-screen justify-center items-center">
        <h1 className="text-4xl text-indigo-500 font-bold pb-16">
          You have successfully submitted the form!
        </h1>
      </div>
    </div>
  );
}

export default Submitted;
