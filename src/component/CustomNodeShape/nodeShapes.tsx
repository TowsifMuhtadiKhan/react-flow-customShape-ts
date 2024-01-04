import { SetStateAction, useState, useCallback } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Edge,
  Connection,
  NodeChange,
  EdgeChange,
  NodeDragHandler,
} from "reactflow";
import "reactflow/dist/style.css";

import CircleNode from "./CircleNode";
import TriangleNode from "./TriangleNode";
import DiamondNode from "./DiamondNode";
import RectangleNode from "./RectangleNode";
import TrapezoidNode from "./TrapezoidNode";

import "./test-updater-node.css";

const rfStyle = {
  backgroundColor: "#B8CEFF",
};
interface XYPosition {
  x: number;
  y: number;
}
interface Node {
  id: string;
  type: string;
  position: XYPosition;
  data: { label: string; type: string };
  draggable?: boolean;
}

const nodeTypes = {
  circleNode: CircleNode,
  triangleNode: TriangleNode,
  diamondNode: DiamondNode,
  rectangleNode: RectangleNode,
  trapezoidNode: TrapezoidNode, // Add the new node type
};

const initialNodes: Node[] = [
  {
    id: "node-1",
    type: "circleNode",
    position: { x: 150, y: 0 },
    data: { label: "Listener", type: "listener" },
    draggable: true,
  },
  {
    id: "node-2",
    type: "rectangleNode", // Use the new rectangle node type
    position: { x: 600, y: 0 },
    data: { label: "Listener", type: "listener" },
    draggable: true,
  },
  {
    id: "node-3",
    type: "triangleNode",
    position: { x: 300, y: 0 },
    data: { label: "Listener", type: "listener" },
    draggable: true,
  },
  {
    id: "node-4",
    type: "diamondNode",
    position: { x: 450, y: 0 },
    data: { label: "Listener", type: "listener" },
    draggable: true,
  },
  {
    id: "node-5",
    type: "rectangleNode",
    data: { label: "API", type: "api" },
    position: { x: 0, y: 150 },
    draggable: true,
  },
  {
    id: "node-6",
    type: "rectangleNode",
    data: { label: "Scripting", type: "scripting" },
    position: { x: 250, y: 150 },
    draggable: true,
  },
  {
    id: "node-7",
    type: "rectangleNode",
    data: { label: "Listener", type: "listener" },
    position: { x: 350, y: 150 },
    draggable: true,
  },
  {
    id: "node-8",
    type: "rectangleNode",
    data: { label: "Sub-process", type: "sub-process" },
    position: { x: 450, y: 150 },
    draggable: true,
  },
  {
    id: "node-9",
    type: "rectangleNode",
    data: { label: "Rule", type: "rule" },
    position: { x: 250, y: 350 },
    draggable: true,
  },
  {
    id: "node-10",
    type: "rectangleNode",
    data: { label: "Database", type: "database" },
    position: { x: 250, y: 450 },
    draggable: true,
  },
  {
    id: "node-11",
    type: "trapezoidNode",
    position: { x: 600, y: 150 },
    data: { label: "Listener", type: "listener" },
    draggable: true,
  },
];

function Flow() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>([]);

  const onNodesChange: (changes: NodeChange[] | EdgeChange[]) => void =
    useCallback(
      (changes) => {
        if (Array.isArray(changes)) {
          setEdges(
            (eds) => applyEdgeChanges(changes as EdgeChange[], eds) as Edge[]
          );
        } else {
          setNodes(
            (nds) => applyNodeChanges(changes as NodeChange[], nds) as Node[]
          );
        }
      },
      [setNodes, setEdges]
    );

  const onEdgesChange: (changes: EdgeChange[]) => void = useCallback(
    (changes) => {
      setEdges((eds) => applyEdgeChanges(changes, eds) as Edge[]);
    },
    [setEdges]
  );

  const onConnect = useCallback(
    (connection: Edge | Connection) =>
      setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  const onNodeDrag: NodeDragHandler = (event, node) => {
    // Update the position of the dragged node
    const updatedNodes = nodes.map((n) =>
      n.id === node.id ? { ...n, position: node.position } : n
    );
    setNodes(updatedNodes as Node[]);
  };
  // const onNodeDragStop: NodeDragHandler = (event, node) => {
  //   // Update the position of the dragged node
  //   const updatedNodes = nodes.map((n) =>
  //     n.id === node.id ? { ...n, position: node.position } : n
  //   );
  //   setNodes(updatedNodes as Node[]);
  // };

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeDrag={onNodeDrag}
        // onNodeDragStop={onNodeDragStop}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        style={rfStyle}
      />
    </div>
  );
}

export default Flow;
