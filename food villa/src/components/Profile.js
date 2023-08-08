import { useState } from "react";
const Profile = (props) => {
  const [count, setCount] = useState(0);
  {
    console.log("function render");
  }
  return (
    <div>
      <h1>Profile Function component</h1>
      <h2> name : {props.name}</h2>
      <h3>Count : {count}</h3>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default Profile;
