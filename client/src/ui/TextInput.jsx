function TextInput({
  type,
  use,
  onChange,
  value,
  placeholder,
  alarmCondition,
  alarmStatement,
}) {
  if (use === "Login/SignUp") {
    return (
      <div>
        <input
          className={`border-2 ${
            alarmCondition ? "border-rose-500" : "border-indigo-200"
          } rounded-md h-13 w-full p-3  focus:outline-none focus:border-blue-700`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
        />
        {alarmCondition && (
          <p className="text-rose-500 pl-4">{alarmStatement}</p>
        )}
      </div>
    );
  }
}

export default TextInput;
