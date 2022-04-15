import React, { useMemo } from "react";
import classes from "./DemoList.module.css";
const DemoList = (props) => {
  console.log("DemoList RUNNING");
  const { items } = props;
  const sortedList = useMemo(() => {
    console.log("items sorted");
    return props.items.sort((a, b) => a - b);
  }, [items]); //항상 재계산됨
  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
