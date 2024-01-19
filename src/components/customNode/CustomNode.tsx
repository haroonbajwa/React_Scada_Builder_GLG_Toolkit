import { Handle, NodeProps, NodeResizer, Position } from "reactflow";
import Dial from "../../components/widgets/Dial";
import Knob from "../widgets/Knob";
import Tank from "../widgets/Tank";
import { FaGear } from "react-icons/fa6";
import { RiDraggable } from "react-icons/ri";
import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import DialSettings from "../widgetsSettings/Dial";
import KnobSettings from "../widgetsSettings/Knob";
import TankSettings from "../widgetsSettings/Tank";
import StartStop from "../widgets/StartStop";

export type TNodeData = {
  component: string;
  widgetData: any;
};
export type TNode = {
  id: string;
  data: TNodeData;
};

const getComponent = (nodeData: TNodeData) => {
  try {
    switch (nodeData.component) {
      case "Dial":
        return <Dial widgetData={nodeData.widgetData} />;
      case "Knob":
        return <Knob widgetData={nodeData.widgetData} />;
      case "Tank":
        return <Tank widgetData={nodeData.widgetData} />;
      // case "StartStop":
      //   return <StartStop widgetData={nodeData.widgetData} />;
      default:
        return null;
    }
  } catch (err) {
    return null;
  }
};

const getWidgetSettings = (widgetData: TNodeData) => {
  console.log(widgetData, "setting data");
  try {
    switch (widgetData.component) {
      case "Dial":
        return <DialSettings widgetData={widgetData.widgetData} />;
      case "Knob":
        return <KnobSettings widgetData={widgetData.widgetData} />;
      case "Tank":
        return <TankSettings widgetData={widgetData.widgetData} />;
      // case "StartStop":
      //   return <StartStop widgetData={widgetData.widgetData} />;
      default:
        return null;
    }
  } catch (err) {
    return null;
  }
};

function CustomNode({ id, data, selected }: NodeProps<TNode>) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        id={id}
        style={{
          height: "80%",
          cursor: "unset",
        }}
      >
        <NodeResizer
          color="#ff0071"
          isVisible={selected}
          minWidth={200}
          minHeight={200}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span className="custom-drag-handle">
            <RiDraggable size={26} />
          </span>
          <FaGear style={{ cursor: "pointer" }} onClick={openModal} />
        </div>
        {getComponent(data)}
      </div>

      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Widget Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>{getWidgetSettings(data)}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
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
