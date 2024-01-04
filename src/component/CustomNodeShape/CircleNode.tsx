import React from "react";
interface CircleNodeProps {
  data: {
    label: string;
    // other properties if there are any
  };
}
function CircleNode({ data }: CircleNodeProps) {
  return (
    <div className="circle-node">
      <div>{/* <label>{data.label}</label> */}</div>
    </div>
  );
}

export default CircleNode;
