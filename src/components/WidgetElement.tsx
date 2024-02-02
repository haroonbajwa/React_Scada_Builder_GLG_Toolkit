import Dial from "./widgets/dials/Dial";
import Knob from "./widgets/knobs/Knob";

const WidgetElement = (props: { widgetData: any }) => {
  const { widgetData } = props;

  // Function to render the corresponding component according to widget type:
  const getComponent = (widgetDataKPI: {
    title: string;
    component: string;
    data: any;
  }) => {
    try {
      switch (widgetDataKPI.component) {
        case "Dial":
          return <Dial widgetData={widgetDataKPI.data} />;
        case "Knob":
          return <Knob widgetData={widgetDataKPI.data} />;
        default:
          return <div>No element</div>;
      }
    } catch (err) {
      return null;
    }
  };

  return (
    <>
      <div
        style={{
          paddingTop: "10px",
          paddingRight: "10px",
          marginBottom: "15px",
        }}
      >
        {/* <h1>asdasdasd</h1> */}
        {getComponent(widgetData)}
      </div>
    </>
  );
};

export default WidgetElement;
