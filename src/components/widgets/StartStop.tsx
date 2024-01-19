import React, { useEffect } from "react";

const StartStop = ({ widgetData }: any) => {
  console.log(widgetData);
  const GLG = new GlgToolkit();

  useEffect(() => {
    GLG.LoadWidgetFromURL(
      "http://localhost:8000/drawings/startStop.g",
      null,
      LoadCB,
      {
        data: widgetData,
      }
    );
  }, [widgetData]);

  const LoadCB = (drawing, data, path) => {
    console.log(drawing, "draw");
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
  };

  return (
    <div
      id={widgetData.id}
      style={{
        minWidth: "170px",
        minHeight: "170px ",
        height: "100%",
      }}
    ></div>
  );
};

export default StartStop;
