import React, { useEffect } from "react";
import { removeWidgetWatermark } from "../../helperFunctions";

import { shallow } from "zustand/shallow";
import useStore, { RFState } from "../../../store";

const selector = (state: RFState) => ({
  updateNodeData: state.updateNodeData,
});

const Slider = ({ widgetData, widgetDesign }: any) => {
  const { updateNodeData } = useStore(selector, shallow);
  const GLG = new GlgToolkit();

  useEffect(() => {
    GLG.LoadWidgetFromURL(
      `http://localhost:8000/drawings/sliders/${widgetDesign}.g`,
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
    if (loader) loader.innerHTML = "";

    drawing.SetParentElement(widgetData.id);
    drawing.SetDResource("LineWidth", 0);

    drawing.InitialDraw();
    removeWidgetWatermark(widgetData.id);

    // update widget's value
    drawing.SetDResource("$Widget/Value", data.data.value);
    drawing.Update();
  };

  useEffect(() => {
    // Set interval to continuously change random values if generateRandom is true
    let intervalId;
    if (widgetData.dataSource === "random") {
      // Function to generate random values
      const generateAndSaveRandomValue = () => {
        const min = 0;
        const max = 50;
        const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

        updateNodeData(widgetData.id, { value: randomValue });
      };
      intervalId = setInterval(generateAndSaveRandomValue, 1000); // Change every second
    }
    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [widgetData, updateNodeData]);

  return <div id={widgetData.id} className="widget-node"></div>;
};

export default Slider;
