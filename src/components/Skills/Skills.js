import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import "./Skills.css";
const Skills = () => {
  return (
    <div>
      <h1 className="my-exp">My Skills</h1>
      <div className="my-skills">
        {" "}
        <ReactSpeedometer
          maxValue={100}
          value={93}
          currentValueText="HTML & CSS: 93 %"
          needleColor="red"
          startColor="red"
          segments={10}
          endColor="green"
        />
        <ReactSpeedometer
          maxValue={100}
          value={83}
          currentValueText="Bootstrap & Tailwind: 85 %"
          needleColor="red"
          startColor="red"
          segments={10}
          endColor="green"
        />
        <ReactSpeedometer
          maxValue={100}
          value={79}
          currentValueText="JavaScript:79 %"
          needleColor="red"
          startColor="red"
          segments={10}
          endColor="green"
        />
        <ReactSpeedometer
          maxValue={100}
          value={92}
          currentValueText="MS Office:92%"
          needleColor="red"
          startColor="red"
          segments={10}
          endColor="green"
        />
        <ReactSpeedometer
          maxValue={100}
          value={88}
          currentValueText="MS Excel:88%"
          needleColor="red"
          startColor="red"
          segments={10}
          endColor="green"
        />
      </div>
    </div>
  );
};

export default Skills;
