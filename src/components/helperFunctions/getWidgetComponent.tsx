// dials
import Dial1 from "../widgets/dials/Dial1";
import Dial2 from "../widgets/dials/Dial2";
import Dial3 from "../widgets/dials/Dial3";
import Dial4 from "../widgets/dials/Dial4";
import Dial5 from "../widgets/dials/Dial5";

// knobs
import Knob1 from "../widgets/knobs/Knob1";
import Knob2 from "../widgets/knobs/Knob2";
import Knob3 from "../widgets/knobs/Knob3";
import Knob4 from "../widgets/knobs/Knob4";
import Knob5 from "../widgets/knobs/Knob5";

import Tank1 from "../widgets/tanks/Tank1";

import Led1 from "../widgets/leds/Led1";

import Toggle1 from "../widgets/toggles/Toggle1";

export const getWidgetComponent = (nodeData) => {
  try {
    switch (nodeData.component) {
      // dials
      case "Dial1":
        return <Dial1 widgetData={nodeData.widgetData} />;
      case "Dial2":
        return <Dial2 widgetData={nodeData.widgetData} />;
      case "Dial3":
        return <Dial3 widgetData={nodeData.widgetData} />;
      case "Dial4":
        return <Dial4 widgetData={nodeData.widgetData} />;
      case "Dial5":
        return <Dial5 widgetData={nodeData.widgetData} />;

      // knobs
      case "Knob1":
        return <Knob1 widgetData={nodeData.widgetData} />;
      case "Knob2":
        return <Knob2 widgetData={nodeData.widgetData} />;
      case "Knob3":
        return <Knob3 widgetData={nodeData.widgetData} />;
      case "Knob4":
        return <Knob4 widgetData={nodeData.widgetData} />;
      case "Knob5":
        return <Knob5 widgetData={nodeData.widgetData} />;

      // tanks
      case "Tank1":
        return <Tank1 widgetData={nodeData.widgetData} />;

      // leds
      case "Led1":
        return <Led1 widgetData={nodeData.widgetData} />;

      // toggles
      case "Toggle1":
        return <Toggle1 widgetData={nodeData.widgetData} />;
      default:
        return null;
    }
  } catch (err) {
    return null;
  }
};
