import React, { useEffect, useState } from "react";
import { removeWidgetWatermark } from "../../helperFunctions";

const LinearGauge = ({ widgetData, widgetDesign }: any) => {
  const GLG = new GlgToolkit();

  useEffect(() => {
    GLG.LoadWidgetFromURL(
      `http://localhost:8000/drawings/linearGauges/${widgetDesign}.g`,
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

    drawing.InitialDraw();
    removeWidgetWatermark(widgetData.id);
  };

  return <div id={widgetData.id} className="widget-node"></div>;
};

export default LinearGauge;
