import React from "react";
import "./SelectDepArr.css";

const SelectDepArr = props => {
  const pickSelectedOption = event => {
    props.setGlobalState({
      ...props.globalState,
      selectValue: event.target.value
    });
  };

  return (
    <div className="selectbetween">
      <select
        className="selectDepArr"
        name="selectDepArr"
        id="selectDepArr"
        onClick={pickSelectedOption}
      >
        <option data-role="default-hidden-option" data-id="1" value="departure">
          Départ à
        </option>
        <option data-id="2" value="arrival">
          Arrivée à
        </option>
      </select>
    </div>
  );
};

export default SelectDepArr;
