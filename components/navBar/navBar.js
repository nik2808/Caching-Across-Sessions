import { Link } from "@chakra-ui/react";

export default function NavBar() {
  const OptionList = [
    ["HOME", "#home"],
    ["EPISODES", "/episodePage"],
    ["CHARACTERS", "/charPage"],
  ];
  return (
    <div className="nav-container">
      {OptionList.map(([item, URL], index) => (
        <Link
          className="nav-element"
          key={index}
          href={URL}
          style={index === 0 ? { borderBottom: "4px solid #B0F10E" } : {}}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
