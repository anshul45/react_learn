import { useState } from "react";
const Section = ({ title, desc, isVisible, isnotVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      <button
        className="cursor-pointer underline"
        onClick={() => isnotVisible("")}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>{desc}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");

  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        desc={
          " lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sitlorem ipslorem ipsum dolor sit ametlorem ips lorem ipsum dolor sit ametlorem ips lorem ipsum dolor sit ametlorem ips lorem lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sitlorem ipslorem ipsum dolor sit ametlorem ips lorem ipsum dolor sit ametlorem ips lorem ipsum dolor sit ametlorem ips lorem"
        }
        isVisible={visibleSection === "about"}
        isnotVisible={() =>
          visibleSection === "about"
            ? setVisibleSection("")
            : setVisibleSection("about")
        }
      />
      <Section
        title={"Team Instamart"}
        desc={
          "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sitlorem ipslorem ipsum dolor sit ametlorem ips lorem ipsum dolor sit ametlorem ips lorem ipsum dolor sit ametlorem ips lorem lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sitlorem ipslorem ipsum dolor sit ametlorem ips lorem ipsum dolor sit ametlorem ips lorem ipsum dolor sit ametlorem ips lorem"
        }
        isVisible={visibleSection === "team"}
        isnotVisible={() =>
          visibleSection === "team"
            ? setVisibleSection("")
            : setVisibleSection("team")
        }
      />
      <Section
        title={"Careers"}
        desc={
          "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sitlorem ipslorem ipsum dolor sit ametlorem ips lorem ipsum dolor sit ametlorem ips lorem ipsum dolor sit ametlorem ips lorem lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sitlorem ipslorem ipsum dolor sit ametlorem ips lorem ipsum dolor sit ametlorem ips lorem ipsum dolor sit ametlorem ips lorem"
        }
        isVisible={visibleSection === "career"}
        isnotVisible={() =>
          visibleSection === "career"
            ? setVisibleSection("")
            : setVisibleSection("career")
        }
      />
    </div>
  );
};

export default Instamart;
