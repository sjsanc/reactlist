import React, { useRef } from "react";

function ListItem({ body, remove, id }) {
  const itemRef = useRef(null);
  return (
    <div className={"listItem"} ref={itemRef}>
      <p>{body}</p>
      <button
        onClick={() => {
          remove(id, itemRef.current);
        }}
      >
        DONE
      </button>
    </div>
  );
}

export default ListItem;
