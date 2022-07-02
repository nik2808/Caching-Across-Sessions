import { Link } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../../pages/_app";

export default function NavBar({ props }) {
  const OptionList = [
    ["HOME", "/"],
    ["EPISODES", "/episodePage"],
    ["CHARACTERS", "/charPage"],
  ];
  const isOnline = useContext(ThemeContext);
  console.log("online status:", isOnline);
  return (
    <div
      className={isOnline ? "nav-container-online" : "nav-container-offline"}
    >
      {OptionList.map(([item, URL], index) => (
        <Link
          className="nav-element"
          key={index}
          href={URL}
          style={props === item ? { borderBottom: "4px solid #B0F10E" } : {}}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
