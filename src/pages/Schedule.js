import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import callApi from "../api/callApi";
import { getUsername } from "../utils/store";
import Fade from "react-reveal/Slide";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#015494",
    opacity: 0.8,
    color: theme.palette.common.white,
    fontSize: 19,
    fontWeight: "bold",
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Schedule = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const username = await getUsername();
      const params = {
        command: "schedules",
        username: username,
      };
      const res = await callApi(params);
      setData(res);
    }
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Fade bottom>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Mã học phần</StyledTableCell>
              <StyledTableCell>Tên học phần</StyledTableCell>
              <StyledTableCell align="center">Số tín chỉ</StyledTableCell>
              <StyledTableCell align="center">Giảng viên</StyledTableCell>
              <StyledTableCell align="center">Tuần học</StyledTableCell>
              <StyledTableCell align="center">Lịch học</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row.index}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  style={{ fontWeight: "bold" }}
                >
                  {row.course_code}
                </StyledTableCell>
                <StyledTableCell>{row.course_name}</StyledTableCell>
                <StyledTableCell align="center">{row.credit}</StyledTableCell>
                <StyledTableCell align="center">{row.teacher}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.study_weeks}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.weekly_schedule.raw}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Fade>
    </TableContainer>
  );
};

export default Schedule;
