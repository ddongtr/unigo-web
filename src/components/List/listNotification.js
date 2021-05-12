import NotificationsItem from "./notificationsItem";
import React from "react";
import Slide from "react-reveal/Slide";

const listNotification = ({ datas }) => {
  const showList = (notifs = []) => {
    let _list = notifs.map((item, index) => {
      return (
        <Slide bottom>
          <NotificationsItem key={index} item={item} />
        </Slide>
      );
    });
    return _list;
  };

  return <div className="row">{showList(datas)}</div>;
};

export default listNotification;
