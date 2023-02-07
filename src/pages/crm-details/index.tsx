import { useState } from "react";
import DropDown from "../../components/dropdown";
import { countryOptions } from "../../utils/options";
import Buttons from "../../components/button";

const CrmDetails = () => {
  const [selectedOption, setSelectedOption] = useState<{
    label: string;
    value: string;
  }>();

  //   Change Country Options
  const handleChange = (event: any) => {
    setSelectedOption(event.value);
  };

  // Change Next cmdDetails Form
  const handleNextButton = () => {
    console.log("CLICK NEXT BUTTON");
  };

  return (
    <>
      <DropDown
        onChange={handleChange}
        selectedOption={selectedOption}
        option={countryOptions}
      />
      <div className="crmButton">
        <Buttons text={"Previuos"} style={true} onClick={handleNextButton} />
        <Buttons text={"Next"} style={false} onClick={handleNextButton} />
      </div>
    </>
  );
};

export default CrmDetails;
