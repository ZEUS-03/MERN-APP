import React, { useReducer } from "react";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, value: action.payload, isValid: true };
    default:
      return state;
  }
};

const Input = (props) => {
  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", payload: event.target.value });
  };

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  return (
    <div
      className={`flex flex-col justify-center p-2 ${
        !inputState.isValid && "text-red-500 "
      }`}
    >
      <label htmlFor={props.id} className={`font-bold `}>
        {props.label}{" "}
      </label>
      {props.element === "input" ? (
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          className={`border border-gray-500 rounded-sm focus:bg-gray-100 px-[3px] ${
            !inputState.isValid && "border-2 border-red-500"
          }`}
          onChange={changeHandler}
          value={inputState.value}
        />
      ) : (
        <textarea
          id={props.id}
          rows={props.rows || 3}
          onChange={changeHandler}
          value={inputState.value}
        />
      )}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
};
export default Input;
