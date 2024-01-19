import React, { useEffect } from "react";

const Tank = ({ widgetData }: any) => {
  console.log(widgetData);
  const GLG = new GlgToolkit();

  // useEffect(() => {
  //   const removeInnerDiv = () => {
  //     const parentDiv = document.querySelector(
  //       `#${widgetData.id} .GlgCanvasContainer`
  //     );

  //     console.log(parentDiv, "parent div");
  //     if (parentDiv) {
  //       // Find the inner div with the specified content
  //       const innerDiv = Array.from(parentDiv.children).find(
  //         (child) => child.innerText === "GLG Community Edition"
  //       );

  //       if (innerDiv) {
  //         // remove
  //         parentDiv.removeChild(innerDiv);
  //       }
  //     }
  //   };
  //   removeInnerDiv();
  // }, [widgetData]);

  useEffect(() => {
    GLG.LoadWidgetFromURL(
      "http://localhost:8000/drawings/tank.g",
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

    // drawing.SetDResource("$Widget/Value", data.data.level);
    // drawing.Update();
  };

  return (
    <div
      id={widgetData.id}
      style={{
        minWidth: "170px",
        minHeight: "170px ",
        height: "100%",
      }}
      // style={{ width: "300px", height: "250px" }}
    ></div>
  );
};

export default Tank;
