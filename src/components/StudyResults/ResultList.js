import React from "react";
import ResultItem from "./ResultItem";

const ResultList = ({ data }) => {
  const showList = (_results = []) => {
    let _list = _results.map((item, index) => {
      return <ResultItem key={index} item={item} />;
    });
    return _list;
  };

  return <div className="row">{showList(data)}</div>;
};

export default ResultList;
