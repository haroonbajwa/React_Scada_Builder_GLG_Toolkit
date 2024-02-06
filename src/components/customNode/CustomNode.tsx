import { useState } from "react";
import { NodeProps, NodeResizer } from "reactflow";
import { shallow } from "zustand/shallow";
import useStore, { RFState } from "../../store";

import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { RiDraggable } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Modal, Button } from "react-bootstrap";

import { getWidgetComponent } from "../helperFunctions/getWidgetComponent";
import { getWidgetSettings } from "../helperFunctions/getWidgetSettings";

export type TNodeData = {
  component: string;
  widgetData: any;
};
export type TNode = {
  id: string;
  data: TNodeData;
};

const selector = (state: RFState) => ({
  removeNode: state.removeNode,
  updateZIndex: state.updateZIndex,
});

function CustomNode({ id, data, selected }: NodeProps<TNode>) {
  const { removeNode, updateZIndex } = useStore(selector, shallow);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const removeWidget = (widget: any) => {
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
        draggable={false}
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
            <FaAngleUp
              size={12}
              style={{ cursor: "pointer" }}
              onClick={() => updateZIndex(data.widgetData.id, "front")}
            />
            <FaAngleDown
              size={12}
              style={{ cursor: "pointer", marginLeft: "5px" }}
              onClick={() => updateZIndex(data.widgetData.id, "back")}
            />
            <FaGear
              size={12}
              style={{ cursor: "pointer", marginLeft: "5px" }}
              onClick={openModal}
            />
            <IoClose
              style={{ cursor: "pointer", marginLeft: "5px" }}
              onClick={() => removeWidget(data)}
            />
          </div>
        </div>
        {getWidgetComponent({ nodeData: data })}
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
