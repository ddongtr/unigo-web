import React from "react";
import ScoreItem from "./ScoreItem";

const ScoreList = ({ data }) => {
  const showList = (_results = []) => {
    let _list = _results.map((item, index) => {
      return <ScoreItem key={index} item={item} />;
    });
    return _list;
  };

  return <div className="row">{showList(data)}</div>;
};

export default ScoreList;
