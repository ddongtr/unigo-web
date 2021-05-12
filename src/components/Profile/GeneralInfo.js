import React from "react";
import { useSelector } from "react-redux";
import Slide from "react-reveal/Slide";

const GeneralInfo = () => {
  const student = useSelector((state) => state.reducer.profile);

  return (
    <div className="general-wrapper">
      <Slide left>
        <img
          src={student.personal_image}
          alt="thumbnail"
          class="img-thumbnail"
        />
        <div className="basic-info-wrapper">
          <span className="basic-info-label">Tên: {student.student_name}</span>
          <span className="basic-info-label">
            Ngày sinh: {student.birthday}
          </span>
        </div>
      </Slide>
    </div>
  );
};

export default GeneralInfo;
