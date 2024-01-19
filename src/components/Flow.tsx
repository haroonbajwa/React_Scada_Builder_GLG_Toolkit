import ReactFlow, {
  Controls,
  Background,
  Panel,
  NodeOrigin,
  useReactFlow,
} from "reactflow";
import { shallow } from "zustand/shallow";

import useStore, { RFState } from "../store";
import "reactflow/dist/style.css";

import CustomNode from "./customNode/CustomNode";
import CustomEdge from "./customEdge/CustomEdge";
import Sidebar from "./sidebar/Sidebar";
import { useCallback, useEffect, useState } from "react";

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
  restoreFlow: state.restoreFlow,
});

// this places the node origin in the center of a node
const nodeOrigin: NodeOrigin = [0.5, 0.5];

function Flow() {
  const [rfInstance, setRfInstance] = useState(null);
  const { setViewport } = useReactFlow();
  // whenever you use multiple values, you should use shallow to make sure the component only re-renders when one of the values changes
  const { nodes, edges, onNodesChange, onEdgesChange, restoreFlow } = useStore(
    selector,
    shallow
  );

  const flowKey = "exampleFlow";

  // save nodes and viewport dimensions
  const onSave = useCallback(() => {
    console.log(rfInstance, "rfInstance");
    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance]);

  // resore saved nodes and viewport dimensions
  const onRestore = useCallback(() => {
    const restore = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey));

      console.log(flow, "flow to restore");
      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        restoreFlow(flow);
        setViewport({ x, y, zoom });
      }
    };

    restore();
  }, [restoreFlow, setViewport]);

  useEffect(() => {
    onRestore();
  }, []);

  return (
    <>
      <div
        className="nodes"
        style={{ display: "flex", width: "100%", height: "100%" }}
      >
        <Sidebar />
        <div style={{ width: "100%", height: "100vh" }}>
          {/* <button onClick={handleAddNode}>add component</button> */}
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
            onInit={setRfInstance}
          >
            <Controls showInteractive={false} />
            <Background />
            <Panel position="top-right">
              <button onClick={onSave}>save</button>
              <button onClick={onRestore}>restore</button>
              <button onClick={() => {}}>add node</button>
            </Panel>
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
