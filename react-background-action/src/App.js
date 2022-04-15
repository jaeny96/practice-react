import React, { useCallback, useState, useMemo } from "react";

import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoList from "./components/Demo/DemoList";
// import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  // const [showParagraph, setShowParagraph] = useState(false);
  // console.log("App RUNNING");
  // const btnClickHandler = useCallback(() => {
  //   setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  // }, []);
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      {/* <h1>Hi there!</h1> */}

      <DemoList title={listTitle} items={listItems} />
      {/* <DemoOutput show={showParagraph} /> */}
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      {/* <Button onClick={btnClickHandler}>Toggle Paragraph!</Button> */}
    </div>
  );
}

export default App;
