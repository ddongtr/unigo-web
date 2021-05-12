import React from "react";
import Zoom from "react-reveal/Zoom";

function ResultItem(props) {
  let { item } = props;
  let bgColor;

  switch (item.as_text) {
    case "B" || "B+":
      bgColor = "#ffffc4";
      break;
    case "C" || "C+":
      bgColor = "#ff9999";
      break;
    case "A" || "A+":
      bgColor = "#b8ff99";
      break;
    case "F":
      bgColor = "#9e9e9e";
      break;
    default:
      bgColor = "#edede1";
  }

  return (
    <Zoom>
      <div className="score-container" style={{ backgroundColor: bgColor }}>
        <div className="score-title">
          <span className="course">
            {item.course_name} - Nhóm học phần {item.course_code}
          </span>
          <span className="score-semester">(Học kỳ {item.semester})</span>
        </div>
        <div className="scores">
          <div className="score">
            <span className="score">Bài tập: {item.bt ? item.bt : "-"}</span>
            <br />
            <span className="score">Số tín chỉ: {item.credit}</span>
          </div>
          <div className="score">
            <span className="score">Chuyên cần: {item.cc ? item.cc : "-"}</span>
            <br />
            <span className="score">
              Trung bình thang 10: {item.T10 ? item.T10 : "-"}
            </span>
          </div>
          <div className="score">
            <span className="score">Giữa kỳ: {item.gk ? item.gk : "-"}</span>
            <br />
            <span className="score">
              Trung bình thang 4: {item.T4 ? item.T4 : "-"}
            </span>
          </div>
          <span className="score">Cuối kỳ: {item.ck ? item.ck : "-"}</span>
          <span className="score">Bảo vệ: {item.bv ? item.bv : "-"}</span>
          <span className="score">Đồ án: {item.da ? item.da : "-"}</span>
          <span className="score">Lý thuyết: {item.lt ? item.lt : "-"}</span>
          <span className="score">Thực hành: {item.th ? item.th : "-"}</span>
        </div>
        <span className="evaluate-score">
          Đánh giá: {item.as_text ? item.as_text : "-"}
        </span>
      </div>
    </Zoom>
  );
}

export default ResultItem;
