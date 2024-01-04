import React from "react";
interface TrapezoidNodeProps {
  data: {
    label: string;
    // other properties if there are any
  };
}

function TrapezoidNode({ data }: TrapezoidNodeProps) {
  return (
    <div className="trapezoid-node">
      <div>
        <label></label>
      </div>
    </div>
  );
}

export default TrapezoidNode;
