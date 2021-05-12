import React from "react";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Legend,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { withStyles } from "@material-ui/core/styles";

import { ArgumentScale, Stack, Animation } from "@devexpress/dx-react-chart";

import { scaleBand } from "@devexpress/dx-chart-core";

const styles = {
  titleText: {
    textAlign: "left",
  },
};

const TextComponent = withStyles(styles)(({ classes, ...restProps }) => (
  <Title.Text {...restProps} className={classes.titleText} />
));

const ResultsChart = ({ data }) => {
  return (
    <div>
      <Chart data={data}>
        <ArgumentScale factory={scaleBand} />
        <ArgumentAxis />
        <ValueAxis />

        <BarSeries
          name="Số tín chỉ đăng ký"
          valueField="credit"
          argumentField="semester"
        />
        <BarSeries
          name="Điểm trung bình thang 10"
          valueField="point"
          argumentField="semester"
        />
        <BarSeries
          name="Điểm rèn luyện thang 10"
          valueField="moral"
          argumentField="semester"
        />
        <Stack />

        <Animation />
        <Title
          text="Kết quả học tập và rèn luyện"
          textComponent={TextComponent}
        />

        <Legend />
      </Chart>
    </div>
  );
};

export default ResultsChart;
