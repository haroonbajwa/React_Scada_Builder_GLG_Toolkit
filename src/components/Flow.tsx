import ReactFlow, { Controls, Background, Panel, NodeOrigin } from "reactflow";
import { shallow } from "zustand/shallow";

import useStore, { RFState } from "../store";
import "reactflow/dist/style.css";

import CustomNode from "./customNode/CustomNode";
import CustomEdge from "./customEdge/CustomEdge";
import Sidebar from "./sidebar/Sidebar";

// custom node and edge types
const nodeTypes = {
  mindmap: CustomNode,
};
const edgeTypes = {
  mindmap: CustomEdge,
};

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  addNode: state.addNode,
  addEdge: state.addEdge,
  removeEdge: state.removeEdge,
});

// this places the node origin in the center of a node
const nodeOrigin: NodeOrigin = [0.5, 0.5];

function Flow() {
  // whenever you use multiple values, you should use shallow to make sure the component only re-renders when one of the values changes
  const { nodes, edges, onNodesChange, onEdgesChange, addNode, addEdge } =
    useStore(selector, shallow);

  const handleAddNode = () => {
    const newNode = {
      id: "sensor3", // Change the ID accordingly
      type: "mindmap",
      data: {
        label: "Sensor 3",
        img: "https://img.icons8.com/?size=80&id=bnkcAWeq3Hf1&format=png",
      },
      position: { x: 300, y: 300 }, // Set the initial position
    };

    addNode(newNode);
  };

  // // connect node
  // const handleConnect = (params) => {
  //   const { source, target } = params;
  //   addEdge(source, target);
  // };

  return (
    <>
      <div
        className="nodes"
        style={{ display: "flex", width: "100%", height: "100%" }}
      >
        <Sidebar />
        <div style={{ width: "100%", height: "100vh" }}>
          <button onClick={handleAddNode}>add component</button>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            // onConnect={handleConnect}
            nodeOrigin={nodeOrigin}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            fitView
          >
            <Controls showInteractive={false} />
            {/* <Background /> */}
            <Panel position="top-left">Advanced Monitoring</Panel>
          </ReactFlow>
        </div>
      </div>
    </>
  );
}

export default Flow;

// import ReactFlow, { Controls, Panel, NodeOrigin } from "reactflow";
// import { shallow } from "zustand/shallow";

// import useStore, { RFState } from "../store";
// import "reactflow/dist/style.css";

// import CustomNode from "./customNode/CustomNode";
// import CustomEdge from "./customEdge/CustomEdge";

// // custom node and edge types
// const nodeTypes = {
//   mindmap: CustomNode,
// };
// const edgeTypes = {
//   mindmap: CustomEdge,
// };

// const selector = (state: RFState) => ({
//   nodes: state.nodes,
//   edges: state.edges,
//   onNodesChange: state.onNodesChange,
//   onEdgesChange: state.onEdgesChange,
//   addNode: state.addNode,
//   addEdge: state.addEdge,
//   removeEdge: state.removeEdge,
// });

// // this places the node origin in the center of a node
// const nodeOrigin: NodeOrigin = [0.5, 0.5];

// function Flow() {
//   // whenever you use multiple values, you should use shallow to make sure the component only re-renders when one of the values changes
//   const { nodes, edges, onNodesChange, onEdgesChange, addNode, addEdge } =
//     useStore(selector, shallow);

//   const handleAddNode = () => {
//     const newNode = {
//       id: "sensor3", // Change the ID accordingly
//       type: "mindmap",
//       data: {
//         label: "Sensor 3",
//         img: "https://img.icons8.com/?size=80&id=bnkcAWeq3Hf1&format=png",
//       },
//       position: { x: 300, y: 300 }, // Set the initial position
//     };

//     addNode(newNode);
//   };

//   // connect node
//   const handleConnect = (params) => {
//     const { source, target } = params;
//     addEdge(source, target);
//   };

//   return (
//     <>
//       <div style={{ display: "flex" }}>
//         <div style={{ width: "100vw", height: "100vh" }}>
//           <button onClick={handleAddNode}>add node</button>
//           <ReactFlow
//             nodes={nodes}
//             edges={edges}
//             onNodesChange={onNodesChange}
//             onEdgesChange={onEdgesChange}
//             onConnect={handleConnect}
//             nodeOrigin={nodeOrigin}
//             nodeTypes={nodeTypes}
//             edgeTypes={edgeTypes}
//             fitView
//           >
//             <Controls showInteractive={false} />
//             <Panel position="top-left">React Flow Mind Map</Panel>
//           </ReactFlow>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Flow;
