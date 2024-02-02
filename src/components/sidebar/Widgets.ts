import { alphabeticUniqueID } from "../helperFunctions";

// common widgets data
const dialsCommonData = () => ({
  id: alphabeticUniqueID(),
  value: 45,
});

const knobsCommonData = () => ({
  id: alphabeticUniqueID(),
  value: 1.9,
});

const ledsCommonData = (value: number) => ({
  id: alphabeticUniqueID(),
  value: value,
});

const valueDisplaysCommonData = () => ({
  id: alphabeticUniqueID(),
  value: 22,
});

const stateIndicatorsCommonData = () => ({
  id: alphabeticUniqueID(),
  value: 0,
});

const processIndicatorsCommonData = () => ({
  id: alphabeticUniqueID(),
  value: 1,
});

const tanksCommonData = () => ({
  id: alphabeticUniqueID(),
  level: 50,
});

const togglesCommonData = () => ({
  id: alphabeticUniqueID(),
  onState: 1,
});

const gaugesCommonData = () => ({
  id: alphabeticUniqueID(),
  value: 3.4,
});

const linearGaugesCommonData = () => ({
  id: alphabeticUniqueID(),
  value: 3.4,
});

const toggleButtonsCommonData = () => ({
  id: alphabeticUniqueID(),
  onState: 1,
});

const pushButtonsCommonData = () => ({
  id: alphabeticUniqueID(),
  onState: 1,
});

const slidersCommonData = () => ({
  id: alphabeticUniqueID(),
  value: 3.4,
});

// widgets default settings to show in sidebar
export const widgets = {
  dials: [
    { component: "Dial1", widgetData: dialsCommonData() },
    { component: "Dial2", widgetData: dialsCommonData() },
    { component: "Dial3", widgetData: dialsCommonData() },
    { component: "Dial4", widgetData: dialsCommonData() },
    { component: "Dial5", widgetData: dialsCommonData() },
    { component: "Dial6", widgetData: dialsCommonData() },
    { component: "Dial7", widgetData: dialsCommonData() },
    { component: "Dial8", widgetData: dialsCommonData() },
    { component: "Dial9", widgetData: dialsCommonData() },
    { component: "Dial10", widgetData: dialsCommonData() },
    { component: "Dial11", widgetData: dialsCommonData() },
    { component: "Dial12", widgetData: dialsCommonData() },
    { component: "Dial13", widgetData: dialsCommonData() },
    { component: "Dial14", widgetData: dialsCommonData() },
    { component: "Dial15", widgetData: dialsCommonData() },
    { component: "Dial16", widgetData: dialsCommonData() },
    { component: "Dial17", widgetData: dialsCommonData() },
    { component: "Dial18", widgetData: dialsCommonData() },
    { component: "Dial19", widgetData: dialsCommonData() },
    { component: "Dial20", widgetData: dialsCommonData() },
    { component: "Dial21", widgetData: dialsCommonData() },
    { component: "Dial22", widgetData: dialsCommonData() },
  ],

  // knobs
  knobs: [
    { component: "Knob1", widgetData: knobsCommonData() },
    { component: "Knob2", widgetData: knobsCommonData() },
    { component: "Knob3", widgetData: knobsCommonData() },
    { component: "Knob4", widgetData: knobsCommonData() },
    { component: "Knob5", widgetData: knobsCommonData() },
    { component: "Knob6", widgetData: knobsCommonData() },
    { component: "Knob7", widgetData: knobsCommonData() },
    { component: "Knob8", widgetData: knobsCommonData() },
    { component: "Knob9", widgetData: knobsCommonData() },
    { component: "Knob10", widgetData: knobsCommonData() },
  ],

  // tanks
  tanks: [
    { component: "Tank1", widgetData: tanksCommonData() },
    { component: "Tank2", widgetData: tanksCommonData() },
    { component: "Tank3", widgetData: tanksCommonData() },
    { component: "Tank4", widgetData: tanksCommonData() },
    { component: "Tank5", widgetData: tanksCommonData() },
    { component: "Tank6", widgetData: tanksCommonData() },
    { component: "Tank7", widgetData: tanksCommonData() },
    { component: "Tank8", widgetData: tanksCommonData() },
    { component: "Tank9", widgetData: tanksCommonData() },
    { component: "Tank10", widgetData: tanksCommonData() },
    { component: "Tank11", widgetData: tanksCommonData() },
    { component: "Tank12", widgetData: tanksCommonData() },
    { component: "Tank13", widgetData: tanksCommonData() },
    { component: "Tank14", widgetData: tanksCommonData() },
    { component: "Tank15", widgetData: tanksCommonData() },
  ],
  // toggles
  toggles: [
    { component: "Toggle1", widgetData: togglesCommonData() },
    { component: "Toggle2", widgetData: togglesCommonData() },
    { component: "Toggle3", widgetData: togglesCommonData() },
    { component: "Toggle4", widgetData: togglesCommonData() },
    { component: "Toggle5", widgetData: togglesCommonData() },
    { component: "Toggle6", widgetData: togglesCommonData() },
    { component: "Toggle7", widgetData: togglesCommonData() },
    { component: "Toggle8", widgetData: togglesCommonData() },
    { component: "Toggle9", widgetData: togglesCommonData() },
    { component: "Toggle10", widgetData: togglesCommonData() },
    { component: "Toggle11", widgetData: togglesCommonData() },
    { component: "Toggle12", widgetData: togglesCommonData() },
  ],

  // gauges
  gauges: [
    { component: "Gauge1", widgetData: gaugesCommonData() },
    { component: "Gauge3", widgetData: gaugesCommonData() },
    { component: "Gauge4", widgetData: gaugesCommonData() },
    { component: "Gauge5", widgetData: gaugesCommonData() },
    { component: "Gauge6", widgetData: gaugesCommonData() },
    { component: "Gauge7", widgetData: gaugesCommonData() },
    { component: "Gauge8", widgetData: gaugesCommonData() },
    { component: "Gauge9", widgetData: gaugesCommonData() },
    // { component: "Gauge10", widgetData: gaugesCommonData() },
    // { component: "Gauge11", widgetData: gaugesCommonData() },
  ],

  // gauges
  linearGauges: [
    { component: "LinearGauge1", widgetData: linearGaugesCommonData() },
    { component: "LinearGauge2", widgetData: linearGaugesCommonData() },
    { component: "LinearGauge3", widgetData: linearGaugesCommonData() },
    { component: "LinearGauge4", widgetData: linearGaugesCommonData() },
    { component: "LinearGauge5", widgetData: linearGaugesCommonData() },
    { component: "LinearGauge6", widgetData: linearGaugesCommonData() },
    { component: "LinearGauge7", widgetData: linearGaugesCommonData() },
    { component: "LinearGauge8", widgetData: linearGaugesCommonData() },
    { component: "LinearGauge9", widgetData: linearGaugesCommonData() },
    { component: "LinearGauge10", widgetData: linearGaugesCommonData() },
    { component: "LinearGauge11", widgetData: linearGaugesCommonData() },
    { component: "LinearGauge12", widgetData: linearGaugesCommonData() },
    { component: "LinearGauge13", widgetData: linearGaugesCommonData() },
    { component: "LinearGauge14", widgetData: linearGaugesCommonData() },
    { component: "LinearGauge15", widgetData: linearGaugesCommonData() },
    { component: "LinearGauge16", widgetData: linearGaugesCommonData() },
  ],

  // toggle Buttons
  toggleButtons: [
    { component: "ColorToggle1", widgetData: toggleButtonsCommonData() },
    { component: "ColorToggle2", widgetData: toggleButtonsCommonData() },
    { component: "ColorToggle3", widgetData: toggleButtonsCommonData() },
    { component: "LabelToggle1", widgetData: toggleButtonsCommonData() },
    { component: "LabelToggle2", widgetData: toggleButtonsCommonData() },
    { component: "LabelToggle3", widgetData: toggleButtonsCommonData() },
  ],

  // push Buttons
  pushButtons: [
    { component: "PushButton1", widgetData: pushButtonsCommonData() },
    { component: "PushButton2", widgetData: pushButtonsCommonData() },
    { component: "PushButton3", widgetData: pushButtonsCommonData() },
    { component: "PushButton4", widgetData: pushButtonsCommonData() },
    { component: "PushButton5", widgetData: pushButtonsCommonData() },
    { component: "PushButton6", widgetData: pushButtonsCommonData() },
    { component: "PushButton7", widgetData: pushButtonsCommonData() },
    { component: "PushButton8", widgetData: pushButtonsCommonData() },
    { component: "PushButton9", widgetData: pushButtonsCommonData() },
    { component: "PushButton10", widgetData: pushButtonsCommonData() },
  ],

  // sliders
  sliders: [
    { component: "Slider1", widgetData: slidersCommonData() },
    { component: "Slider2", widgetData: slidersCommonData() },
    { component: "Slider3", widgetData: slidersCommonData() },
    { component: "Slider4", widgetData: slidersCommonData() },
    { component: "Slider5", widgetData: slidersCommonData() },
    { component: "Slider6", widgetData: slidersCommonData() },
    { component: "Slider7", widgetData: slidersCommonData() },
    { component: "Slider8", widgetData: slidersCommonData() },
  ],

  // leds
  leds: [
    { component: "Led1", widgetData: ledsCommonData(0) },
    {
      component: "Led2",
      widgetData: {
        id: alphabeticUniqueID(),
        value0: 0,
        value1: 0,
        value2: 0,
      },
    },
    { component: "Led3", widgetData: ledsCommonData(-12.9) },
    { component: "Led4", widgetData: ledsCommonData(0) },
    {
      component: "Led5",
      widgetData: {
        id: alphabeticUniqueID(),
        value0: 0,
        value1: 0,
        value2: 0,
      },
    },
    { component: "Led6", widgetData: ledsCommonData(0) },
  ],

  // value dispalys
  valueDisplays: [
    { component: "ValueDisplay1", widgetData: valueDisplaysCommonData() },
    { component: "ValueDisplay2", widgetData: valueDisplaysCommonData() },
    { component: "ValueDisplay3", widgetData: valueDisplaysCommonData() },
    { component: "ValueDisplay4", widgetData: valueDisplaysCommonData() },
    { component: "ValueDisplay5", widgetData: valueDisplaysCommonData() },
    { component: "ValueDisplay6", widgetData: valueDisplaysCommonData() },
    { component: "ValueDisplay7", widgetData: valueDisplaysCommonData() },
  ],

  // state indicators
  stateIndicators: [
    { component: "StateIndicator1", widgetData: stateIndicatorsCommonData() },
    { component: "StateIndicator2", widgetData: stateIndicatorsCommonData() },
    { component: "StateIndicator3", widgetData: stateIndicatorsCommonData() },
  ],

  // process indicators
  processIndicators: [
    { component: "Flowmeter", widgetData: processIndicatorsCommonData() },
    { component: "Gauge1", widgetData: processIndicatorsCommonData() },
    { component: "Gauge2", widgetData: processIndicatorsCommonData() },
    { component: "Gauge3", widgetData: processIndicatorsCommonData() },
    { component: "Indicator", widgetData: processIndicatorsCommonData() },
    { component: "Level", widgetData: processIndicatorsCommonData() },
    { component: "Pressure", widgetData: processIndicatorsCommonData() },
    { component: "PropellerMeter", widgetData: processIndicatorsCommonData() },
    { component: "Recorder", widgetData: processIndicatorsCommonData() },
    { component: "Rotameter", widgetData: processIndicatorsCommonData() },
    { component: "Thermometer", widgetData: processIndicatorsCommonData() },
    { component: "Venturi", widgetData: processIndicatorsCommonData() },
  ],
};
