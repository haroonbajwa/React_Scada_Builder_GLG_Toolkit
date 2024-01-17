import CustomNode from "../customNode/CustomNode";
import Dial from "../widgets/Dial";
import Knob from "../widgets/Knob";
import Tank from "../widgets/Tank";

const components = [
  {
    name: "Dial",
    data: {
      id: "dial-sidebar",
      value: 45,
    },
  },
  {
    name: "Knob",
    data: {
      id: "knob-sidebar",
      value: 1.9,
    },
  },
  {
    name: "Tank",
    data: {
      id: "tank-sidebar",
      value: 40,
    },
  },
];
// const nodes = [
//   {
//     id: "dial",
//     type: "mindmap",
//     data: {
//       component: "Dial",
//       widgetData: {
//         value: 45,
//       },
//     },
//     position: { x: 300, y: 400 },
//   },
//   {
//     id: "knob",
//     type: "mindmap",
//     data: {
//       component: "Knob",
//       widgetData: {
//         value: 1.9,
//       },
//     },
//     position: { x: 550, y: 450 },
//   },
// ];

const getComponent = (nodeData) => {
  console.log(nodeData, "node da");
  try {
    switch (nodeData.name) {
      case "Dial":
        return <Dial widgetData={nodeData.data} />;
      case "Knob":
        return <Knob widgetData={nodeData.data} />;
      case "Tank":
        return <Tank widgetData={nodeData.data} />;
      default:
        return null;
    }
  } catch (err) {
    return null;
  }
};

const Sidebar = () => {
  return (
    <div
      style={{
        width: "350px",
        padding: "16px",
        backgroundColor: "#595959",
        // borderRight: "1px solid #ccc",
      }}
    >
      {components.map((component, index) => (
        <div
          key={index}
          style={{ width: "300px", height: "250px", margin: "5px" }}
        >
          {getComponent(component)}
          {/* <CustomNode
            key={index}
            id={`custom-node-${index}`}
            data={node.data}
          /> */}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
