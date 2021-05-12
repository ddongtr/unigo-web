import React from "react";

function NotificationsItem(props) {
  let { item } = props;

  return (
    <div className="item_wrapper">
      <div className="item_title">
        <span className="notif_title">{item.title}</span>
      </div>
      <div className="item_content">
        <pre className="notif_content">{item.content}</pre>
      </div>
    </div>
  );
}

export default NotificationsItem;
