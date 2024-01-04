// TriangleNode.jsx
import React from "react";
interface TriangleNodeProps {
  data: {
    label: string;
    // other properties if there are any
  };
}

function TriangleNode({ data }: TriangleNodeProps) {
  return (
    <div className="triangle-node">
      <div>
        {/* <label>{data.label}</label> */}
        <label></label>
      </div>
    </div>
  );
}

export default TriangleNode;
