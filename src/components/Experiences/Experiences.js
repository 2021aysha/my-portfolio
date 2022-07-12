import React, { useContext } from "react";
import "./Experiences.css";
import experience from "../../img/experience.png";
import { themeContext } from "../../Context";
const Experiences = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <h1 className="my-exp">My Experiences</h1>
      <div className="experiences-section">
        <div>
          <img width={"100%"} src={experience} alt="" />
        </div>
        <div>
          <div>
            {" "}
            <h2 style={{ color: darkMode ? "white" : "" }} className="ex-name">
              Aysha Begum
            </h2>
            <p className="exp-title">
              ICQA process assistant <span>at Amazon</span>
            </p>
            <p style={{ fontSize: "18px", color: "gray" }}>
              September 2016 to Present
            </p>
            <hr />
          </div>
          <div>
            <ul className="job-role" type="circle">
              <li>Problem Solver and Ticket Creator</li>
              <li>Train the new comer at ICQA Department</li>
              <li>Lead the 15-20 persons team on absence of Supervisor </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
