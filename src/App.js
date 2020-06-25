import React, { useState } from "react";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import NewItemButton from "./components/NewItemButton";
import "./App.css";

function App() {
  const [itemList, setItemList] = useState([{ body: "sample" }]);

  const postItem = (target) => {
    let listCopy = [...itemList];
    listCopy.push({ body: target.value });
    setItemList(listCopy);
    target.value = "";
  };

  const removeItem = (target, itemRef) => {
    let listCopy = [...itemList];
    console.log(itemRef);
    listCopy.splice(target.key, 1);
    setItemList(listCopy);
  };

  return (
    <div>
      <Header total={itemList.length} />
      <NewItemButton postItem={postItem} />
      <div className={"wrapper"}>
        {itemList.length !== 0
          ? itemList.map((item, i) => {
              return (
                <ListItem
                  id={itemList.length}
                  key={i}
                  body={item.body}
                  title={item.title}
                  remove={removeItem}
                />
              );
            })
          : console.log("nothing to show")}
      </div>
    </div>
  );
}

const SAMPLE_DATA = [
  { body: "This is some text", title: "gotta get this done" },
  {
    body:
      "this is s some more textthis is some more textthis is some more text",
  },
];

export default App;
