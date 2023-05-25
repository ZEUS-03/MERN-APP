import React from "react";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";

import Input from "../../shared/components/Input";
const NewPlace = (props) => {
  return (
    <form className="rounded-md p-3 w-[50%] mx-auto bg-[#fde2cd] mt-3 shadow-md">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid input"
      />
    </form>
  );
};

export default NewPlace;
