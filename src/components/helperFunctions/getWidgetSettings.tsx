import DialSettings from "../widgetsSettings/Dial";
import KnobSettings from "../widgetsSettings/Knob";
import LedSettings from "../widgetsSettings/Led";
import TankSettings from "../widgetsSettings/Tank";

export const getWidgetSettings = (widgetData) => {
  try {
    switch (widgetData.component) {
      // dials settings
      case "Dial1":
      case "Dial2":
      case "Dial3":
      case "Dial4":
      case "Dial5":
      case "Dial6":
      case "Dial7":
      case "Dial8":
      case "Dial9":
      case "Dial10":
      case "Dial11":
        return <DialSettings widgetData={widgetData.widgetData} />;

      // knobs settings
      case "Knob1":
      case "Knob2":
      case "Knob3":
      case "Knob4":
      case "Knob5":
      case "Knob6":
      case "Knob7":
      case "Knob8":
      case "Knob9":
      case "Knob10":
        return <KnobSettings widgetData={widgetData.widgetData} />;

      // tanks settings
      case "Tank1":
        return <TankSettings widgetData={widgetData.widgetData} />;

      // leds settings
      case "Led1":
        return <LedSettings widgetData={widgetData.widgetData} />;
      default:
        return null;
    }
  } catch (err) {
    return null;
  }
};
