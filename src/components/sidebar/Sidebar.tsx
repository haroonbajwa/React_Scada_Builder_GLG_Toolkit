// import CustomNode from "../customNode/CustomNode";
import Dial from "../widgets/Dial";
import Knob from "../widgets/Knob";
import Tank from "../widgets/Tank";

const components = [
  {
    component: "Dial",
    widgetData: {
      id: "dial-sidebar",
      value: 45,
    },
  },
  {
    component: "Knob",
    widgetData: {
      id: "knob-sidebar",
      value: 1.9,
    },
  },
  {
    component: "Tank",
    widgetData: {
      id: "tank-sidebar",
      value: 40,
    },
  },
];
// const nodes = [
//   {
//     id: "dial",
//     type: "mindmap",
//     widgetData: {
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
//     widgetData: {
//       component: "Knob",
//       widgetData: {
//         value: 1.9,
//       },
//     },
//     position: { x: 550, y: 450 },
//   },
// ];

const getComponent = (nodeData) => {
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

const Sidebar = () => {
  const onDragStart = (event, component) => {
    const componentString = JSON.stringify(component);
    event.dataTransfer.setData("application/reactflow", componentString);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      style={{
        width: "300px",
        backgroundColor: "#595959",
        height: "100vh",
        overflowY: "scroll",
        overflowX: "hidden",
      }}
    >
      {components.map((component, index) => (
        <div
          key={index}
          style={{
            width: "230px",
            height: "200px",
            margin: "5px",
          }}
          className="dndnode input"
          onDragStart={(event) => onDragStart(event, component)}
          draggable
        >
          {getComponent(component)}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
