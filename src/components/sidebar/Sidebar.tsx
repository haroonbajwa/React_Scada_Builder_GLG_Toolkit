import { Accordion } from "react-bootstrap";
import Dial from "../widgets/Dial";
import Knob from "../widgets/Knob";
import Led from "../widgets/Led";
import Tank from "../widgets/Tank";
import Toggle from "../widgets/Toggle";

const components = {
  dials: [
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
        level: 40,
      },
    },
  ],
  toggles: [
    {
      component: "Toggle",
      widgetData: {
        id: "toggle-sidebar",
        onState: 1,
      },
    },
    {
      component: "Led",
      widgetData: {
        id: "led-sidebar",
        value0: 0,
        value1: 0,
        value2: 0,
      },
    },
  ],
};

const getComponent = (nodeData) => {
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

const Sidebar = () => {
  const onDragStart = (event, component) => {
    const componentString = JSON.stringify(component);
    event.dataTransfer.setData("application/reactflow", componentString);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <>
      <div
        style={{
          width: "300px",
          backgroundColor: "#595959",
          height: "100vh",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <Accordion defaultActiveKey="0">
          {Object.keys(components).map((category, index) => (
            // <Card key={index}>
            <Accordion.Item eventKey={String(index)} key={index}>
              <Accordion.Header>{category}</Accordion.Header>
              <Accordion.Body className="p-0">
                {components[category].map((component, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: "230px",
                      height: "200px",
                      margin: "5px",
                    }}
                    className="dndnode input"
                    draggable
                    onDragStart={(event) => onDragStart(event, component)}
                  >
                    {getComponent(component)}
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
            // </Card>
          ))}
        </Accordion>
        {/* {components.map((component, index) => (
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
        ))} */}
      </div>
    </>
  );
};

export default Sidebar;
