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
import Slide from "react-reveal/Slide";

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

const ExamSchedule = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const username = await getUsername();
      const params = {
        command: "tests",
        username: username,
      };
      const res = await callApi(params);
      setData(res);
    }
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Slide bottom>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Mã học phần</StyledTableCell>
              <StyledTableCell>Tên học phần</StyledTableCell>
              <StyledTableCell align="center">Nhóm thi</StyledTableCell>
              <StyledTableCell align="center">Thi chung</StyledTableCell>
              <StyledTableCell align="center">Lịch thi</StyledTableCell>
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
                <StyledTableCell align="center">
                  {row.test_group}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.test_grouping === "false" ? "-" : row.test_grouping}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.test_schedule}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Slide>
    </TableContainer>
  );
};

export default ExamSchedule;
