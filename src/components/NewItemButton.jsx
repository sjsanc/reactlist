import React, { useState, useRef } from "react";

function NewItemButton({ postItem }) {
  const [entryState, setEntryState] = useState(false);

  const textRef = useRef(null);

  const handleExpand = () => {
    if (entryState === false) {
      setEntryState(!entryState);
      textRef.current.style = "height: 90px; padding: 4px; margin-top: 9px;";
    } else {
      setEntryState(!entryState);
      textRef.current.style = "height: 0px; padding: 0px; margin-top: 0px;";
    }
  };

  let make = (
    <p className={"clickMe"} onClick={handleExpand}>
      click to add to your worries
    </p>
  );
  let post = (
    <button
      className={"makeButton"}
      onClick={() => {
        postItem(textRef.current);
        handleExpand();
      }}
    >
      MAKE!!!!
    </button>
  );

  return (
    <div className={"newItemButton"}>
      <textarea className={"textarea"} ref={textRef}></textarea>
      {entryState ? post : make}
    </div>
  );
}

export default NewItemButton;
