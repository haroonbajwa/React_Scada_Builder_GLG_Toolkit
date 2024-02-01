import React, { useEffect } from "react";
import { removeWidgetWatermark } from "../helperFunctions";

const Tank = ({ widgetData }: any) => {
  const GLG = new GlgToolkit();

  useEffect(() => {
    GLG.LoadWidgetFromURL(
      "http://localhost:8000/drawings/tanks/tank3.g",
      null,
      LoadCB,
      {
        data: widgetData,
      }
    );
  }, [widgetData]);

  const LoadCB = async (drawing, data, path) => {
    if (drawing == null) {
      window.alert("Can't load drawing, check console message for details.");
      return;
    }

    const loader = document.getElementById(widgetData.id);
    loader.innerHTML = "";

    drawing.SetParentElement(widgetData.id);
    drawing.SetDResource("LineWidth", 0);

    // drawing.SetDResource("FillColor", "0 1 0");

    // const fillColorObj = drawing.GetResource();
    // console.log(fillColorObj, "fill color");

    // drawing.SetDResource("FillColor", 1.0);

    drawing.InitialDraw();
    removeWidgetWatermark(widgetData.id);

    // const canvas = document.getElementsByClassName("GlgCanvas")[2];
    // const ctx = canvas.getContext("2d");
    // console.log(ctx, "canvas obj");

    // ctx.fillStyle = "#ff6464";
    // ctx.strokeStyle = "#fc8080";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    // await ctx.save();

    // drawing.SetDResource("$Widget/level", 14);
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
