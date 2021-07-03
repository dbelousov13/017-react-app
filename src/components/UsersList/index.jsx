import React, { Component } from "react";
import UsersListItem from "./UsersList";

class Userslist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //   users: [1, 2, 3, 4, 5, 6], //(1=><li>1</li>)
      users: [
        {
          id: 1,
          firstName: "Test1",
          lastName: "Testovich1",
        },
        {
          id: 2,
          firstName: "Test2",
          lastName: "Testovich2",
        },
        {
          id: 10,
          firstName: "Test3",
          lastName: "Testovich3",
        },
        {
          id: 4,
          firstName: "Test4",
          lastName: "Testovich4",
        },
      ],
    };
  }

  mapUser = (user, index) => <UsersListItem key={index} user={user} />;

  render() {
    const { users } = this.state;
    return <ul>{users.map(this.mapUser)}</ul>;
  }
}

export default Userslist;
