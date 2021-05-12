import React, { useState, useEffect } from "react";
import ScoreList from "../components/Scores/ScoreList";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { course } from "../tempdb";

import { getUsername } from "../utils/store";
import callApi from "../api/callApi";

const Scores = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      const username = await getUsername();
      const params = {
        command: "study_result",
        username: username,
      };
      const res = await callApi(params);
      setData(res);
    }
    fetchData();
  }, []);

  const handleSearch = (text) => {
    setSearch(text.target.value);
  };

  const fetchDataByKey = async (key) => {
    const username = await getUsername();
    const params = {
      command: "study_result",
      username: username,
      search: key,
    };
    const res = await callApi(params);
    setData(res);
  };

  return (
    <div>
      <div className="score-bar">
        <Typography variant="h3">Xem điểm học phần</Typography>
        <div>
          <Typography variant="caption">
            <span style={{ fontSize: 18 }}>Tìm môn học: </span>
          </Typography>
          <OutlinedInput
            id="search"
            value={search}
            onChange={handleSearch}
            placeholder="Nhập môn học"
          />
          <Button
            style={{ margin: 5, backgroundColor: "#0063afbc" }}
            type="button"
            size="large"
            onClick={() => {
              fetchDataByKey(search);
            }}
          >
            <span style={{ fontSize: 18, fontWeight: "bold", color: "#FFF" }}>
              Tìm
            </span>
          </Button>
        </div>
      </div>
      <ScoreList data={data} />
    </div>
  );
};

export default Scores;
