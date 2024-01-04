import React from "react";
interface DiamondNodeProps {
  data: {
    label: string;
    // other properties if there are any
  };
}
function DiamondNode({ data }: DiamondNodeProps) {
  return (
    <div className="diamond-node">
      <div>{/* <label>{data.label}</label> */}</div>
    </div>
  );
}

export default DiamondNode;
