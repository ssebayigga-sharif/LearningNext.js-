import React from "react";
interface x {
  id: number;
  name: string;
}

const newUsers = async () => {
  // fetching data using the fetch function
  const members = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache: "no-store" } //useful when data is changing frequently and is only in the fetch fuction
  );
  let myMembers: x[] = await members.json();
  return (
    <div>
      <h1>My Members</h1>
      <ul>
        {myMembers.map((x) => (
          <ol key={x.id}>{x.name}</ol>
        ))}
      </ul>
    </div>
  );
};

export default newUsers;
