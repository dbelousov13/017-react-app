import React, { useState, useEffect } from "react";

function UsersListItem(props) {
  const {
    user: { id, firstName, lastName },
  } = props;

  return (
    <li>
      ID: "{id}", Fullname: "{firstName}
      {lastName}"
    </li>
  );
}

export default UsersListItem;
