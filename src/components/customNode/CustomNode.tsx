import { useState } from "react";
import { NodeProps, NodeResizer } from "reactflow";
import { shallow } from "zustand/shallow";
import useStore, { RFState } from "../../store";

import Dial from "../../components/widgets/Dial";
import Knob from "../widgets/Knob";
import Tank from "../widgets/Tank";

import { FaGear } from "react-icons/fa6";
import { RiDraggable } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Modal, Button } from "react-bootstrap";

import DialSettings from "../widgetsSettings/Dial";
import KnobSettings from "../widgetsSettings/Knob";
import TankSettings from "../widgetsSettings/Tank";
import Toggle from "../widgets/Toggle";
import Led from "../widgets/Led";
import LedSettings from "../widgetsSettings/Led";

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
      case "Toggle":
        return <Toggle widgetData={nodeData.widgetData} />;
      case "Led":
        return <Led widgetData={nodeData.widgetData} />;
      default:
        return null;
    }
  } catch (err) {
    return null;
  }
};

const getWidgetSettings = (widgetData: TNodeData) => {
  try {
    switch (widgetData.component) {
      case "Dial":
        return <DialSettings widgetData={widgetData.widgetData} />;
      case "Knob":
        return <KnobSettings widgetData={widgetData.widgetData} />;
      case "Tank":
        return <TankSettings widgetData={widgetData.widgetData} />;
      // case "Toggle":
      //   return <StartStop widgetData={widgetData.widgetData} />;
      case "Led":
        return <LedSettings widgetData={widgetData.widgetData} />;
      default:
        return null;
    }
  } catch (err) {
    return null;
  }
};

const selector = (state: RFState) => ({
  removeNode: state.removeNode,
});

function CustomNode({ id, data, selected }: NodeProps<TNode>) {
  const { removeNode } = useStore(selector, shallow);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const rmeoveWidget = (widget: any) => {
    removeNode(widget.widgetData.id);
  };

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
          // height: "100%",
          height: "calc(100% - 34px)",
          cursor: "unset",
        }}
      >
        <NodeResizer
          color="#ff0071"
          isVisible={selected}
          minWidth={200}
          minHeight={200}
          keepAspectRatio
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "3px",
          }}
        >
          <span className="custom-drag-handle">
            <RiDraggable size={26} />
          </span>
          <div>
            <FaGear
              size={12}
              style={{ cursor: "pointer" }}
              onClick={openModal}
            />
            <IoClose
              style={{ cursor: "pointer", marginLeft: "5px" }}
              onClick={() => rmeoveWidget(data)}
            />
          </div>
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
