import React, { useState, useEffect } from "react";
import ResultsChart from "../components/StudyResults/ResultsChart";
import ResultList from "../components/StudyResults/ResultList";
import callApi from "../api/callApi";
import { getUsername } from "../utils/store";

import { results } from "../tempdb";

import Divider from "@material-ui/core/Divider";

const StudyResult = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const username = await getUsername();
      const params = {
        command: "morals",
        username: username,
      };
      const res = await callApi(params);
      const _chart = await res.map((item) => {
        return {
          semester: item.semester,
          credit: item.registered_credit,
          point: item.avg_b10 ? item.avg_b10 : 0,
          moral: item.moral_points ? item.moral_points / 10 : 0,
        };
      });
      console.log("chart data", _chart);
      setData(res);
      setChartData(_chart);
    }
    fetchData();
  }, []);
  return (
    <div>
      <ResultsChart data={chartData} />
      <Divider light={true} />
      <ResultList data={data} />
    </div>
  );
};

export default StudyResult;
