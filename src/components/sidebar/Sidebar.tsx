import { Accordion } from "react-bootstrap";
import { widgets } from "./Widgets";
import { getWidgetComponent } from "../helperFunctions/getWidgetComponent";

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
          {Object.keys(widgets).map((category, index) => (
            <Accordion.Item eventKey={String(index)} key={index}>
              <Accordion.Header>{category}</Accordion.Header>
              <Accordion.Body className="p-0" style={{ cursor: "grab" }}>
                {widgets[category].map((component, idx) => (
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
                    {getWidgetComponent(component)}
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Sidebar;
