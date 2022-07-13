import Button from "./Button";
import TypeText from "./TypeText";
import MyName from "./MyName";
import Socials from "./Socials";
import { useState, useEffect } from "react";

function UserInterface() {
  let [text, setText] = useState("");
  let [index, setIndex] = useState(0);

  useEffect(() => {
    let welcome = "Namaste, World!";

    if (index < welcome.length) {
      setTimeout(() => {
        setText((text) => text + welcome[index]);
      }, 500);
      setIndex((index) => index + 1);
    }
    // eslint-disable-next-line
  }, [text]);

  return (
    <>
      <div id="container">
        <Button />
        <TypeText text={text} />
        <MyName />
        <Socials />
      </div>
    </>
  );
}

export default UserInterface;
