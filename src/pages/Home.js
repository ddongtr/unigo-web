import React, { useEffect, useState } from "react";
import TabControl from "../components/Tab/TabControl";
import callApi from "../api/callApi";

const Home = () => {
  const [overall, setOverall] = useState([]);
  const [classes, setClasses] = useState([]);

  const getOverallNotifs = async () => {
    const params = {
      command: "overall_notifications",
      method: "GET",
    };
    const res = await callApi(params);
    setOverall(res);
  };

  const getClassesNotifs = async () => {
    const params = {
      command: "notifications",
      method: "GET",
    };
    const res = await callApi(params);
    setClasses(res);
  };

  useEffect(() => {
    getOverallNotifs();
    getClassesNotifs();
  }, []);

  return (
    <div>
      <TabControl
        tab1="Thông báo chung"
        tab2="Thông báo lớp học phần"
        data1={overall}
        data2={classes}
      />
    </div>
  );
};

export default Home;
