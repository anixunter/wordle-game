import { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ keyVal, bigKey, disabled }) => {
  const { onSelectLetter, onEnter, onDelete } = useContext(AppContext);

  const selectLetterHandler = () => {
    if (keyVal === "Enter") {
      onEnter();
    } else if (keyVal === "Del") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div
      className="key"
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetterHandler}
    >
      {keyVal}
    </div>
  );
};

export default Key;
