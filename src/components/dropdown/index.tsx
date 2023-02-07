import React from "react";
import Select from "react-select";

const DropDown = ({ option, selectedOption, onChange }: any) => {
  return (
    <Select
      defaultValue={selectedOption}
      onChange={onChange}
      options={option}
    />
  );
};

export default DropDown;
