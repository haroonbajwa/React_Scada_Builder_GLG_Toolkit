import React, { useEffect } from "react";
import { removeWidgetWatermark } from "../../helperFunctions";

const Knob4 = ({ widgetData }: any) => {
  const GLG = new GlgToolkit();
  useEffect(() => {
    GLG.LoadWidgetFromURL(
      "http://localhost:8000/drawings/knobs/knob4.g",
      null,
      LoadCB,
      {
        data: widgetData,
      }
    );
  }, [widgetData]);

  const LoadCB = (drawing, data, path) => {
    if (drawing == null) {
      window.alert("Can't load drawing, check console message for details.");
      return;
    }

    const loader = document.getElementById(widgetData.id);
    loader.innerHTML = "";

    drawing.SetParentElement(widgetData.id);
    drawing.SetDResource("LineWidth", 0);

    StartDashboardDemo(drawing, data);
  };

  const StartDashboardDemo = (drawing, data) => {
    const viewport = drawing;

    viewport.InitialDraw();
    removeWidgetWatermark(widgetData.id);

    // drawing.SetDResource("$Widget/Value", data.data.value);
    // drawing.Update();
  };

  return (
    <div
      id={widgetData.id}
      style={{
        minWidth: "170px",
        minHeight: "170px",
        height: "100%",
      }}
      // style={{ width: "300px", height: "250px" }}
    ></div>
  );
};

export default Knob4;
