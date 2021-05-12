import React from "react";
import Slide from "react-reveal/Slide";

function ResultItem(props) {
  let { item } = props;
  let bgColor;
  let moralColor;

  switch (item.study_classify) {
    case "Bình thường":
      bgColor = "#ffffc4";
      moralColor = "#ffffd9";
      break;
    case "Yếu":
      bgColor = "#ff9999";
      moralColor = "#ffb3b3";
      break;
    case "Giỏi":
      bgColor = "#b8ff99";
      moralColor = "#c8ffb0";
      break;
    case "Xuất sắc":
      bgColor = "#7dffee";
      moralColor = "#c2fff7";
      break;
    default:
      bgColor = "#edede1";
      moralColor = "#ededeb";
  }

  return (
    <div className="result-item-container">
      <Slide left>
        <div className="points-wrapper" style={{ backgroundColor: bgColor }}>
          <div className="avg-points">
            <span className="semester">Học kỳ: {item.semester}</span>
            <br />
            <span className="point">
              Điểm trung bình thang 4: {item.avg_b4 ? item.avg_b4 : ""}
            </span>
            <br />
            <span className="point">
              Điểm trung bình thang 10: {item.avg_b10 ? item.avg_b10 : ""}
            </span>
            <br />
            <span className="point">
              Điểm trung bình xét học bổng:{" "}
              {item.avg_scholar ? item.avg_scholar : ""}
            </span>
          </div>
          <div className="sumary-evaluate">
            <span className="credit">
              Số tín chỉ đăng ký: {item.registered_credit}
            </span>
            <br />
            <span className="point">
              Số tín chỉ tích lũy:{" "}
              {item.saved_credits ? item.saved_credits : ""}
            </span>
            <br />
            <span className="point">
              Điểm GPA:{" "}
              {item.avg_saved_credit_b4 ? item.avg_saved_credit_b4 : ""}
            </span>
            <br />
          </div>
          <div className="relearn">
            <span className="credit">
              Số tín chỉ học lại:{" "}
              {item.relearn_credit !== null ? item.relearn_credit : 0}
            </span>
            <br />
            <span className="study-warning">
              Cảnh báo: {item.warnings !== "" ? item.warnings : "Không"}
            </span>
            <br />
            <span className="evaluate">Xếp loại: {item.study_classify}</span>
          </div>
        </div>
      </Slide>
      <Slide right>
        <div className="moral-wrapper" style={{ backgroundColor: moralColor }}>
          <div className="moral-title">
            <span>Kết quả rèn luyện:</span>
          </div>
          <div className="moral-content">
            <span className="point">
              Điểm rèn luyện: {item.moral_points ? item.moral_points : ""}
            </span>
            <br />
            <span className="point">
              Điểm rèn luyện trung bình: {item.avg_moral}
            </span>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default ResultItem;
