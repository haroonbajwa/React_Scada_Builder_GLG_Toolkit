import Dial from "../widgets/dials/Dial";
import Tank from "../widgets/tanks/Tank";
import Led from "../widgets/leds/Led";
import Toggle from "../widgets/toggles/Toggle";
import ToggleButton from "../widgets/toggleButtons/ToggleButton";
import Gauge from "../widgets/gauges/Gauge";
import LinearGauge from "../widgets/linearGauges/LinearGauge";
import Slider from "../widgets/sliders/Slider";
import PushButton from "../widgets/pushButtons/PushButton";
import Knob from "../widgets/knobs/Knob";
import ValueDisplay from "../widgets/valueDisaplys/ValueDisplay";
import StateIndicator from "../widgets/stateIndicators/StateIndicator";
import ProcessIndicator from "../widgets/processIndicators/ProcessIndicator";
import ProcessControl from "../widgets/processControls/ProcessControl";
import Motor from "../widgets/motors/Motor";
import Valve from "../widgets/valves/Valve";
import ExternalImage from "../widgets/externalResources/ExternalImage";
import InputField from "../widgets/inputFields/InputField";
import React from "react";

interface Props {
  nodeData: { component: string; widgetData: any };
  disableInput?: boolean;
}

export const getWidgetComponent: React.FC<Props> = ({
  nodeData,
  disableInput = false,
}) => {
  try {
    switch (nodeData.component) {
      // dials
      case "Dial1":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial1" />;
      case "Dial2":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial2" />;
      case "Dial3":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial3" />;
      case "Dial4":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial4" />;
      case "Dial5":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial5" />;
      case "Dial6":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial6" />;
      case "Dial7":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial7" />;
      case "Dial8":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial8" />;
      case "Dial9":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial9" />;
      case "Dial10":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial10" />;
      case "Dial11":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial11" />;
      case "Dial12":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial12" />;
      case "Dial13":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial13" />;
      case "Dial14":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial14" />;
      case "Dial15":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial15" />;
      case "Dial16":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial16" />;
      case "Dial17":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial17" />;
      case "Dial18":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial18" />;
      case "Dial19":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial19" />;
      case "Dial20":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial20" />;
      case "Dial21":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial21" />;
      case "Dial22":
        return <Dial widgetData={nodeData.widgetData} widgetDesign="dial22" />;

      // knobs
      case "Knob1":
        return <Knob widgetData={nodeData.widgetData} widgetDesign="knob1" />;
      case "Knob2":
        return <Knob widgetData={nodeData.widgetData} widgetDesign="knob2" />;
      case "Knob3":
        return <Knob widgetData={nodeData.widgetData} widgetDesign="knob3" />;
      case "Knob4":
        return <Knob widgetData={nodeData.widgetData} widgetDesign="knob4" />;
      case "Knob5":
        return <Knob widgetData={nodeData.widgetData} widgetDesign="knob5" />;
      case "Knob6":
        return <Knob widgetData={nodeData.widgetData} widgetDesign="knob6" />;
      case "Knob7":
        return <Knob widgetData={nodeData.widgetData} widgetDesign="knob7" />;
      case "Knob8":
        return <Knob widgetData={nodeData.widgetData} widgetDesign="knob8" />;
      case "Knob9":
        return <Knob widgetData={nodeData.widgetData} widgetDesign="knob9" />;
      case "Knob10":
        return <Knob widgetData={nodeData.widgetData} widgetDesign="knob10" />;

      // tanks
      case "Tank1":
        return <Tank widgetData={nodeData.widgetData} widgetDesign="tank1" />;
      case "Tank2":
        return <Tank widgetData={nodeData.widgetData} widgetDesign="tank2" />;
      case "Tank3":
        return <Tank widgetData={nodeData.widgetData} widgetDesign="tank3" />;
      case "Tank4":
        return <Tank widgetData={nodeData.widgetData} widgetDesign="tank4" />;
      case "Tank5":
        return <Tank widgetData={nodeData.widgetData} widgetDesign="tank5" />;
      case "Tank6":
        return <Tank widgetData={nodeData.widgetData} widgetDesign="tank6" />;
      case "Tank7":
        return <Tank widgetData={nodeData.widgetData} widgetDesign="tank7" />;
      case "Tank8":
        return <Tank widgetData={nodeData.widgetData} widgetDesign="tank8" />;
      case "Tank9":
        return <Tank widgetData={nodeData.widgetData} widgetDesign="tank9" />;
      case "Tank10":
        return <Tank widgetData={nodeData.widgetData} widgetDesign="tank10" />;
      case "Tank11":
        return <Tank widgetData={nodeData.widgetData} widgetDesign="tank11" />;
      case "Tank12":
        return <Tank widgetData={nodeData.widgetData} widgetDesign="tank12" />;
      case "Tank13":
        return <Tank widgetData={nodeData.widgetData} widgetDesign="tank13" />;
      case "Tank14":
        return <Tank widgetData={nodeData.widgetData} widgetDesign="tank14" />;
      case "Tank15":
        return <Tank widgetData={nodeData.widgetData} widgetDesign="tank15" />;

      // leds
      case "Led1":
        return <Led widgetData={nodeData.widgetData} widgetDesign="led1" />;
      case "Led2":
        return <Led widgetData={nodeData.widgetData} widgetDesign="led2" />;
      case "Led3":
        return <Led widgetData={nodeData.widgetData} widgetDesign="led3" />;
      case "Led4":
        return <Led widgetData={nodeData.widgetData} widgetDesign="led4" />;
      case "Led5":
        return <Led widgetData={nodeData.widgetData} widgetDesign="led5" />;
      case "Led6":
        return <Led widgetData={nodeData.widgetData} widgetDesign="led6" />;

      // value Disaplays
      case "ValueDisplay1":
        return (
          <ValueDisplay
            widgetData={nodeData.widgetData}
            widgetDesign="valueDisplay1"
          />
        );
      case "ValueDisplay2":
        return (
          <ValueDisplay
            widgetData={nodeData.widgetData}
            widgetDesign="valueDisplay2"
          />
        );
      case "ValueDisplay3":
        return (
          <ValueDisplay
            widgetData={nodeData.widgetData}
            widgetDesign="valueDisplay3"
          />
        );
      case "ValueDisplay4":
        return (
          <ValueDisplay
            widgetData={nodeData.widgetData}
            widgetDesign="valueDisplay4"
          />
        );
      case "ValueDisplay5":
        return (
          <ValueDisplay
            widgetData={nodeData.widgetData}
            widgetDesign="valueDisplay5"
          />
        );
      case "ValueDisplay6":
        return (
          <ValueDisplay
            widgetData={nodeData.widgetData}
            widgetDesign="valueDisplay6"
          />
        );
      case "ValueDisplay7":
        return (
          <ValueDisplay
            widgetData={nodeData.widgetData}
            widgetDesign="valueDisplay7"
          />
        );

      // state indicators
      case "StateIndicator1":
        return (
          <StateIndicator
            widgetData={nodeData.widgetData}
            widgetDesign="stateIndicator1"
          />
        );
      case "StateIndicator2":
        return (
          <StateIndicator
            widgetData={nodeData.widgetData}
            widgetDesign="stateIndicator2"
          />
        );
      case "StateIndicator3":
        return (
          <StateIndicator
            widgetData={nodeData.widgetData}
            widgetDesign="stateIndicator3"
          />
        );

      // motors
      case "BlowerOrFan":
        return (
          <Motor widgetData={nodeData.widgetData} widgetDesign="blowerOrFan" />
        );
      case "CentrifugalFan":
        return (
          <Motor
            widgetData={nodeData.widgetData}
            widgetDesign="centrifugalFan"
          />
        );
      case "CentrifugalPump":
        return (
          <Motor
            widgetData={nodeData.widgetData}
            widgetDesign="centrifugalPump"
          />
        );
      case "DisplacementPump":
        return (
          <Motor
            widgetData={nodeData.widgetData}
            widgetDesign="displacementPump"
          />
        );
      case "EngineDriver":
        return (
          <Motor widgetData={nodeData.widgetData} widgetDesign="engineDriver" />
        );
      case "Fan":
        return <Motor widgetData={nodeData.widgetData} widgetDesign="fan" />;
      case "InjectorEjector":
        return (
          <Motor
            widgetData={nodeData.widgetData}
            widgetDesign="injectorEjector"
          />
        );
      case "Motor1":
        return <Motor widgetData={nodeData.widgetData} widgetDesign="motor1" />;
      case "Motor2":
        return <Motor widgetData={nodeData.widgetData} widgetDesign="motor2" />;
      case "Motor3":
        return <Motor widgetData={nodeData.widgetData} widgetDesign="motor3" />;
      case "ReciprocatingPump":
        return (
          <Motor
            widgetData={nodeData.widgetData}
            widgetDesign="reciprocatingPump"
          />
        );
      case "RotaryPump":
        return (
          <Motor widgetData={nodeData.widgetData} widgetDesign="rotaryPump" />
        );
      case "SumpPump":
        return (
          <Motor widgetData={nodeData.widgetData} widgetDesign="sumpPump" />
        );
      case "TurbineCompressor":
        return (
          <Motor
            widgetData={nodeData.widgetData}
            widgetDesign="turbineCompressor"
          />
        );
      case "TurbineDriver":
        return (
          <Motor
            widgetData={nodeData.widgetData}
            widgetDesign="turbineDriver"
          />
        );

      // process indicators
      case "Flowmeter":
        return (
          <ProcessIndicator
            widgetData={nodeData.widgetData}
            widgetDesign="flowmeter"
          />
        );
      case "ProcessGauge1":
        return (
          <ProcessIndicator
            widgetData={nodeData.widgetData}
            widgetDesign="gauge1"
          />
        );
      case "ProcessGauge2":
        return (
          <ProcessIndicator
            widgetData={nodeData.widgetData}
            widgetDesign="gauge2"
          />
        );
      case "ProcessGauge3":
        return (
          <ProcessIndicator
            widgetData={nodeData.widgetData}
            widgetDesign="gauge3"
          />
        );
      case "Indicator":
        return (
          <ProcessIndicator
            widgetData={nodeData.widgetData}
            widgetDesign="indicator"
          />
        );
      case "Level":
        return (
          <ProcessIndicator
            widgetData={nodeData.widgetData}
            widgetDesign="level"
          />
        );
      case "Light":
        return (
          <ProcessIndicator
            widgetData={nodeData.widgetData}
            widgetDesign="light"
          />
        );
      case "Pressure":
        return (
          <ProcessIndicator
            widgetData={nodeData.widgetData}
            widgetDesign="pressure"
          />
        );
      case "PropellerMeter":
        return (
          <ProcessIndicator
            widgetData={nodeData.widgetData}
            widgetDesign="propellerMeter"
          />
        );
      case "Recorder":
        return (
          <ProcessIndicator
            widgetData={nodeData.widgetData}
            widgetDesign="recorder"
          />
        );
      case "Rotameter":
        return (
          <ProcessIndicator
            widgetData={nodeData.widgetData}
            widgetDesign="rotameter"
          />
        );
      case "Thermometer":
        return (
          <ProcessIndicator
            widgetData={nodeData.widgetData}
            widgetDesign="thermometer"
          />
        );
      case "Venturi":
        return (
          <ProcessIndicator
            widgetData={nodeData.widgetData}
            widgetDesign="venturi"
          />
        );

      // process controls
      case "BallMill":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="ballMill"
          />
        );
      case "BriquettingMachine":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="briquettingMachine"
          />
        );
      case "BucketConveyor":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="bucketConveyor"
          />
        );
      case "Centrifuge":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="centrifuge"
          />
        );
      case "Conveyor":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="conveyor"
          />
        );
      case "Cyclone":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="cyclone"
          />
        );
      case "DrumFilter":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="drumFilter"
          />
        );
      case "ElectricalPrecipitator":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="electricalPrecipitator"
          />
        );
      case "FilterOrStrainer":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="filterOrStrainer"
          />
        );
      case "FilterPress":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="filterPress"
          />
        );
      case "GasBurner":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="gasBurner"
          />
        );
      case "Grinder":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="grinder"
          />
        );
      case "HammerCrusher":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="hammerCrusher"
          />
        );
      case "Hoist":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="hoist"
          />
        );
      case "Mixer1":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="mixer1"
          />
        );
      case "Mixer2":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="mixer2"
          />
        );
      case "OilBurner":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="oilBurner"
          />
        );
      case "RollerCrusher":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="rollerCrusher"
          />
        );
      case "RotaryDryer":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="rotaryDryer"
          />
        );
      case "Screener":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="screener"
          />
        );
      case "ScrewConveyor":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="screwConveyor"
          />
        );
      case "Separator":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="separator"
          />
        );
      case "SlopeConveyor":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="slopeConveyor"
          />
        );
      case "Thickener":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="thickener"
          />
        );
      case "TrayDryer":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="trayDryer"
          />
        );
      case "TunnelDryer":
        return (
          <ProcessControl
            widgetData={nodeData.widgetData}
            widgetDesign="tunnelDryer"
          />
        );

      // sliders
      case "Slider1":
        return (
          <Slider widgetData={nodeData.widgetData} widgetDesign="slider1" />
        );
      case "Slider2":
        return (
          <Slider widgetData={nodeData.widgetData} widgetDesign="slider2" />
        );
      case "Slider3":
        return (
          <Slider widgetData={nodeData.widgetData} widgetDesign="slider3" />
        );
      case "Slider4":
        return (
          <Slider widgetData={nodeData.widgetData} widgetDesign="slider4" />
        );
      case "Slider5":
        return (
          <Slider widgetData={nodeData.widgetData} widgetDesign="slider5" />
        );
      case "Slider6":
        return (
          <Slider widgetData={nodeData.widgetData} widgetDesign="slider6" />
        );
      case "Slider7":
        return (
          <Slider widgetData={nodeData.widgetData} widgetDesign="slider7" />
        );
      case "Slider8":
        return (
          <Slider widgetData={nodeData.widgetData} widgetDesign="slider8" />
        );

      // toggles
      case "Toggle1":
        return (
          <Toggle widgetData={nodeData.widgetData} widgetDesign="toggle1" />
        );
      case "Toggle2":
        return (
          <Toggle widgetData={nodeData.widgetData} widgetDesign="toggle2" />
        );
      case "Toggle3":
        return (
          <Toggle widgetData={nodeData.widgetData} widgetDesign="toggle3" />
        );
      case "Toggle4":
        return (
          <Toggle widgetData={nodeData.widgetData} widgetDesign="toggle4" />
        );
      case "Toggle5":
        return (
          <Toggle widgetData={nodeData.widgetData} widgetDesign="toggle5" />
        );
      case "Toggle6":
        return (
          <Toggle widgetData={nodeData.widgetData} widgetDesign="toggle6" />
        );
      case "Toggle7":
        return (
          <Toggle widgetData={nodeData.widgetData} widgetDesign="toggle7" />
        );
      case "Toggle8":
        return (
          <Toggle widgetData={nodeData.widgetData} widgetDesign="toggle8" />
        );
      case "Toggle9":
        return (
          <Toggle widgetData={nodeData.widgetData} widgetDesign="toggle9" />
        );
      case "Toggle10":
        return (
          <Toggle widgetData={nodeData.widgetData} widgetDesign="toggle10" />
        );
      case "Toggle11":
        return (
          <Toggle widgetData={nodeData.widgetData} widgetDesign="toggle11" />
        );
      case "Toggle12":
        return (
          <Toggle widgetData={nodeData.widgetData} widgetDesign="toggle12" />
        );

      // gauges
      case "Gauge1":
        return <Gauge widgetData={nodeData.widgetData} widgetDesign="gauge1" />;
      case "Gauge2":
        return <Gauge widgetData={nodeData.widgetData} widgetDesign="gauge2" />;
      case "Gauge3":
        return <Gauge widgetData={nodeData.widgetData} widgetDesign="gauge3" />;
      case "Gauge4":
        return <Gauge widgetData={nodeData.widgetData} widgetDesign="gauge4" />;
      case "Gauge5":
        return <Gauge widgetData={nodeData.widgetData} widgetDesign="gauge5" />;
      case "Gauge6":
        return <Gauge widgetData={nodeData.widgetData} widgetDesign="gauge6" />;
      case "Gauge7":
        return <Gauge widgetData={nodeData.widgetData} widgetDesign="gauge7" />;
      case "Gauge8":
        return <Gauge widgetData={nodeData.widgetData} widgetDesign="gauge8" />;
      case "Gauge9":
        return <Gauge widgetData={nodeData.widgetData} widgetDesign="gauge9" />;
      case "Gauge10":
        return (
          <Gauge widgetData={nodeData.widgetData} widgetDesign="gauge10" />
        );
      case "Gauge11":
        return (
          <Gauge widgetData={nodeData.widgetData} widgetDesign="gauge11" />
        );

      // gauges
      case "LinearGauge1":
        return (
          <LinearGauge
            widgetData={nodeData.widgetData}
            widgetDesign="linearGauge1"
          />
        );
      case "LinearGauge2":
        return (
          <LinearGauge
            widgetData={nodeData.widgetData}
            widgetDesign="linearGauge2"
          />
        );
      case "LinearGauge3":
        return (
          <LinearGauge
            widgetData={nodeData.widgetData}
            widgetDesign="linearGauge3"
          />
        );
      case "LinearGauge4":
        return (
          <LinearGauge
            widgetData={nodeData.widgetData}
            widgetDesign="linearGauge4"
          />
        );
      case "LinearGauge5":
        return (
          <LinearGauge
            widgetData={nodeData.widgetData}
            widgetDesign="linearGauge5"
          />
        );
      case "LinearGauge6":
        return (
          <LinearGauge
            widgetData={nodeData.widgetData}
            widgetDesign="linearGauge6"
          />
        );
      case "LinearGauge7":
        return (
          <LinearGauge
            widgetData={nodeData.widgetData}
            widgetDesign="linearGauge7"
          />
        );
      case "LinearGauge8":
        return (
          <LinearGauge
            widgetData={nodeData.widgetData}
            widgetDesign="linearGauge8"
          />
        );
      case "LinearGauge9":
        return (
          <LinearGauge
            widgetData={nodeData.widgetData}
            widgetDesign="linearGauge9"
          />
        );
      case "LinearGauge10":
        return (
          <LinearGauge
            widgetData={nodeData.widgetData}
            widgetDesign="linearGauge10"
          />
        );
      case "LinearGauge11":
        return (
          <LinearGauge
            widgetData={nodeData.widgetData}
            widgetDesign="linearGauge11"
          />
        );
      case "LinearGauge12":
        return (
          <LinearGauge
            widgetData={nodeData.widgetData}
            widgetDesign="linearGauge12"
          />
        );
      case "LinearGauge13":
        return (
          <LinearGauge
            widgetData={nodeData.widgetData}
            widgetDesign="linearGauge13"
          />
        );
      case "LinearGauge14":
        return (
          <LinearGauge
            widgetData={nodeData.widgetData}
            widgetDesign="linearGauge14"
          />
        );
      case "LinearGauge15":
        return (
          <LinearGauge
            widgetData={nodeData.widgetData}
            widgetDesign="linearGauge15"
          />
        );
      case "LinearGauge16":
        return (
          <LinearGauge
            widgetData={nodeData.widgetData}
            widgetDesign="linearGauge16"
          />
        );

      // toggle buttons
      case "ColorToggle1":
        return (
          <ToggleButton
            widgetData={nodeData.widgetData}
            widgetDesign="colorToggle1"
          />
        );
      case "ColorToggle2":
        return (
          <ToggleButton
            widgetData={nodeData.widgetData}
            widgetDesign="colorToggle2"
          />
        );
      case "ColorToggle3":
        return (
          <ToggleButton
            widgetData={nodeData.widgetData}
            widgetDesign="colorToggle3"
          />
        );
      case "LabelToggle1":
        return (
          <ToggleButton
            widgetData={nodeData.widgetData}
            widgetDesign="labelToggle1"
          />
        );
      case "LabelToggle2":
        return (
          <ToggleButton
            widgetData={nodeData.widgetData}
            widgetDesign="labelToggle2"
          />
        );
      case "LabelToggle3":
        return (
          <ToggleButton
            widgetData={nodeData.widgetData}
            widgetDesign="labelToggle3"
          />
        );

      // push buttons
      case "PushButton1":
        return (
          <PushButton
            widgetData={nodeData.widgetData}
            widgetDesign="pushButton1"
          />
        );
      case "PushButton2":
        return (
          <PushButton
            widgetData={nodeData.widgetData}
            widgetDesign="pushButton2"
          />
        );
      case "PushButton3":
        return (
          <PushButton
            widgetData={nodeData.widgetData}
            widgetDesign="pushButton3"
          />
        );
      case "PushButton4":
        return (
          <PushButton
            widgetData={nodeData.widgetData}
            widgetDesign="pushButton4"
          />
        );
      case "PushButton5":
        return (
          <PushButton
            widgetData={nodeData.widgetData}
            widgetDesign="pushButton5"
          />
        );
      case "PushButton6":
        return (
          <PushButton
            widgetData={nodeData.widgetData}
            widgetDesign="pushButton6"
          />
        );
      case "PushButton7":
        return (
          <PushButton
            widgetData={nodeData.widgetData}
            widgetDesign="pushButton7"
          />
        );
      case "PushButton8":
        return (
          <PushButton
            widgetData={nodeData.widgetData}
            widgetDesign="pushButton8"
          />
        );
      case "PushButton9":
        return (
          <PushButton
            widgetData={nodeData.widgetData}
            widgetDesign="pushButton9"
          />
        );
      case "PushButton10":
        return (
          <PushButton
            widgetData={nodeData.widgetData}
            widgetDesign="pushButton10"
          />
        );

      // valves
      case "Valve1":
        return <Valve widgetData={nodeData.widgetData} widgetDesign="valve1" />;
      case "Valve2":
        return <Valve widgetData={nodeData.widgetData} widgetDesign="valve2" />;
      case "Valve3":
        return <Valve widgetData={nodeData.widgetData} widgetDesign="valve3" />;
      case "Valve4":
        return <Valve widgetData={nodeData.widgetData} widgetDesign="valve4" />;
      case "Valve5":
        return <Valve widgetData={nodeData.widgetData} widgetDesign="valve5" />;
      case "Valve6":
        return <Valve widgetData={nodeData.widgetData} widgetDesign="valve6" />;
      case "Valve7":
        return <Valve widgetData={nodeData.widgetData} widgetDesign="valve7" />;
      case "Valve8":
        return <Valve widgetData={nodeData.widgetData} widgetDesign="valve8" />;
      case "Valve9":
        return <Valve widgetData={nodeData.widgetData} widgetDesign="valve9" />;
      case "Valve10":
        return (
          <Valve widgetData={nodeData.widgetData} widgetDesign="valve10" />
        );
      case "Valve11":
        return (
          <Valve widgetData={nodeData.widgetData} widgetDesign="valve11" />
        );
      case "Valve12":
        return (
          <Valve widgetData={nodeData.widgetData} widgetDesign="valve12" />
        );
      case "Valve13":
        return (
          <Valve widgetData={nodeData.widgetData} widgetDesign="valve13" />
        );
      case "Valve14":
        return (
          <Valve widgetData={nodeData.widgetData} widgetDesign="valve14" />
        );
      case "Valve15":
        return (
          <Valve widgetData={nodeData.widgetData} widgetDesign="valve15" />
        );

      // external resources
      case "ExternalImage":
        return <ExternalImage widgetData={nodeData.widgetData} type="image" />;
      case "ExternalVideo":
        return (
          <ExternalImage
            widgetData={nodeData.widgetData}
            type="video"
            disableInput={disableInput}
          />
        );
      case "ExternalWeb":
        return (
          <ExternalImage
            widgetData={nodeData.widgetData}
            type="web"
            disableInput={disableInput}
          />
        );

      // input fields
      case "TextField":
        return <InputField widgetData={nodeData.widgetData} type="text" />;
      case "Checkbox":
        return <InputField widgetData={nodeData.widgetData} type="checkbox" />;
      case "NumberField":
        return <InputField widgetData={nodeData.widgetData} type="number" />;

      default:
        return null;
    }
  } catch (err) {
    return null;
  }
};
