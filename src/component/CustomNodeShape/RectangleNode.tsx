import React from "react";
interface RectangleNodProps {
  data: {
    label: string;
    type: string;
    // other properties if there are any
  };
}

function RectangleNode({ data }: RectangleNodProps) {
  return (
    <div className={`rectangle-node ${data.type}`}>
      <div>{/* <label>{data.label}</label> */}</div>
    </div>
  );
}

export default RectangleNode;
