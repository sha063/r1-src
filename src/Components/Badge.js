import React from "react";

const Badge = (props) => {
  return (
    <button type="button" class="btn btn-primary position-relative">
      {props.name}
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {props.notification}
        <span class="visually-hidden">unread messages</span>
      </span>
    </button>
  );
};

export default Badge;
