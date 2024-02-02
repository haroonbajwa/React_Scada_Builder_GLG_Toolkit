import React, { useEffect, useState } from "react";
import { removeWidgetWatermark } from "../../helperFunctions";

const ToggleButton = ({ widgetData, widgetDesign }: any) => {
  // const [toggleState, setToggleState] = useState();
  const GLG = new GlgToolkit();

  useEffect(() => {
    GLG.LoadWidgetFromURL(
      `http://localhost:8000/drawings/toggleButtons/${widgetDesign}.g`,
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

    // drawing.AddListener(GLG.GlgCallbackType.INPUT_CB, handleToggleChange);

    drawing.InitialDraw();
    removeWidgetWatermark(widgetData.id);
  };

  // // Event handler for toggle control value change
  // const handleToggleChange = (vp, message_obj) => {
  //   // const origin = message_obj.GetSResource("Origin");
  //   // const format = message_obj.GetSResource("Format");
  //   const action = message_obj.GetSResource("Action");
  //   // const subaction = message_obj.GetSResource("SubAction");

  //   // console.log(vp, origin, format, action, subaction, "aal types");

  //   if (action == "ValueChanged") {
  //     const onState = vp.GetDResource("$Widget/OnState");
  //     setToggleState(onState);
  //     vp.SetDResource("$Widget/OnState", onState);
  //     alert("Toggle value changed to " + onState);
  //     console.log(onState, "Toggle control in GLG drawing changed!");
  //   }
  // };

  return <div id={widgetData.id} className="widget-node"></div>;
};

export default ToggleButton;
