import { useState } from "react";
const Profile = (props) => {
  return (
    <div>
      <h1>Profile Function component</h1>
      <h2> name : {props.name}</h2>
    </div>
  );
};

export default Profile;
