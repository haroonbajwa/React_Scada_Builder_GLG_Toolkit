import React, { useEffect } from "react";

const Knob = ({ widgetData }: any) => {
  const GLG = new GlgToolkit();

  useEffect(() => {
    GLG.LoadWidgetFromURL(
      "http://localhost:8000/drawings/knob.g",
      null,
      LoadCB,
      {
        data: widgetData,
      }
    );
  }, [widgetData]);

  console.log(widgetData, "WidgetData from knob");

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
    console.log(data, "data cb");
    const viewport = drawing;
    viewport.InitialDraw();

    // drawing.SetDResource("$Widget/Value", data.data.value);
    // drawing.Update();
  };

  return (
    <div id={widgetData.id} style={{ width: "300px", height: "250px" }}></div>
  );
};

export default Knob;
