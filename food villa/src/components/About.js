import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is Food Villa Web App</p>
      <Profile name={"function component"} />

      <ProfileClass name={"class Component"} />
    </div>
  );
};

export default About;
