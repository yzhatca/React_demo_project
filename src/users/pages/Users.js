import React from "react";
import UserList from "../components/UserList";

export default function Users() {
  const USERS = [
    {
      id: "001",
      name: "yzh",
      image: "https://pbs.twimg.com/media/Ck8XrdcUYAANCHD.jpg",
      places: 3,
    },
  ];

  return (
    <div>
      <UserList items={USERS} />;
    </div>
  );
}
