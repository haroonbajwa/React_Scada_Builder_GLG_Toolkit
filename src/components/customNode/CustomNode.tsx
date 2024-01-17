import { Handle, NodeProps, Position } from "reactflow";
import Dial from "../../components/widgets/Dial";
import Knob from "../widgets/Knob";
import Tank from "../widgets/Tank";

export type TNodeData = {
  component: string;
  widgetData: any;
};
export type TNode = {
  component: string;
  data: TNodeData;
};

const getComponent = (nodeData: TNodeData) => {
  console.log(nodeData, "ndoe da");
  try {
    switch (nodeData.component) {
      case "Dial":
        return <Dial widgetData={nodeData.widgetData} />;
      case "Knob":
        return <Knob widgetData={nodeData.widgetData} />;
      case "Tank":
        return <Tank widgetData={nodeData.widgetData} />;
      default:
        return null;
    }
  } catch (err) {
    return null;
  }
};

function CustomNode({ id, data }: NodeProps<TNode>) {
  return (
    <>
      <div
        id={id}
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        // }}
      >
        {getComponent(data)}
      </div>

      {/* <Handle type="target" position={Position.Top} /> */}
      {/* <Handle type="source" position={Position.Bottom} /> */}
    </>
  );
}

export default CustomNode;

// import { Handle, NodeProps, Position } from "reactflow";
// import ProgressComponent from "./ProgressComponent";

// export type NodeData = {
//   label: string;
//   img: string;
//   progress?: number;
// };

// function CustomNode({ id, data }: NodeProps<NodeData>) {
//   return (
//     <>
//       <div
//         id={id}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <img width={50} height={50} src={data.img} style={{ margin: "auto" }} />
//         {data.progress && <ProgressComponent id={id} value={data.progress} />}
//         <input defaultValue={data.label} style={{ textAlign: "center" }} />
//         <button onClick={() => {}}>Turn Off</button>
//       </div>

//       <Handle type="target" position={Position.Top} />
//       <Handle type="source" position={Position.Bottom} />
//     </>
//   );
// }

// export default CustomNode;
