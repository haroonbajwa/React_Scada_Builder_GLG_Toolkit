import { alphabeticUniqueID } from "../helperFunctions";

const dialsCommonData = () => ({
  id: alphabeticUniqueID(),
  value: 45,
});

const knobsCommonData = () => ({
  id: alphabeticUniqueID(),
  value: 1.9,
});

// widgets with default settings to show in sidebar
export const widgets = {
  dials: [
    {
      component: "Dial1",
      widgetData: dialsCommonData(),
    },
    {
      component: "Dial2",
      widgetData: dialsCommonData(),
    },
    {
      component: "Dial3",
      widgetData: dialsCommonData(),
    },
    {
      component: "Dial4",
      widgetData: dialsCommonData(),
    },
    {
      component: "Dial5",
      widgetData: dialsCommonData(),
    },
  ],

  // knobs
  knobs: [
    {
      component: "Knob1",
      widgetData: knobsCommonData(),
    },
    {
      component: "Knob2",
      widgetData: knobsCommonData(),
    },
    {
      component: "Knob3",
      widgetData: knobsCommonData(),
    },
    {
      component: "Knob4",
      widgetData: knobsCommonData(),
    },
    {
      component: "Knob5",
      widgetData: knobsCommonData(),
    },
  ],

  // tanks
  tanks: [
    {
      component: "Tank1",
      widgetData: {
        id: alphabeticUniqueID(),
        level: 40,
      },
    },
  ],
  // toggles
  toggles: [
    {
      component: "Toggle1",
      widgetData: {
        id: alphabeticUniqueID(),
        onState: 1,
      },
    },
  ],

  // leds
  leds: [
    {
      component: "Led1",
      widgetData: {
        id: alphabeticUniqueID(),
        value0: 0,
        value1: 0,
        value2: 0,
      },
    },
  ],
};
