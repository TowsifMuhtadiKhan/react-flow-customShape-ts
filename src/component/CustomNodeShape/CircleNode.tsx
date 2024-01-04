import React from "react";
interface CircleNodeProps {
  data: {
    label: string;
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
