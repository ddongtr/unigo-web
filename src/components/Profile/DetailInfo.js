import React from "react";
import TextField from "@material-ui/core/TextField";
import Slide from "react-reveal/Slide";

import { useSelector } from "react-redux";

const DetailInfo = () => {
  const student = useSelector((state) => state.reducer.profile);
  return (
    <Slide right>
      <div className="detail-wrapper">
        <TextField
          id="standard-read-only-input"
          label="Mã số sinh viên"
          margin="dense"
          defaultValue={student.sutdent_id}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="standard-read-only-input"
          margin="dense"
          label="Lớp sinh hoạt"
          defaultValue={student.class_name}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="standard-read-only-input"
          margin="dense"
          label="Số điện thoại"
          defaultValue={student.phone}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="standard-read-only-input"
          margin="dense"
          label="Email học tập"
          defaultValue={student.school_mail}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="standard-read-only-input"
          margin="dense"
          label="Email cá nhân"
          defaultValue={student.personal_email}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="standard-read-only-input"
          margin="dense"
          label="Số thẻ BHYT"
          defaultValue={student.medical_id}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="standard-read-only-input"
          margin="dense"
          label="Ngày hết hạn BHYT"
          defaultValue={student.medical_id_end}
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </Slide>
  );
};

export default DetailInfo;
