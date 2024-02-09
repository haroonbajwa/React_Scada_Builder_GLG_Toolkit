import { useEffect, useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { shallow } from "zustand/shallow";
import useStore, { RFState } from "../../../store";

const selector = (state: RFState) => ({
  updateNodeData: state.updateNodeData,
});

const InputField = ({ widgetData, type }: any) => {
  const { updateNodeData } = useStore(selector, shallow);

  const initialState = {
    text: widgetData.value || "",
    number: widgetData.value || 0,
    checkbox: widgetData.checked || false,
  };
  const [fieldValue, setFieldValue] = useState(initialState[type]);

  useEffect(() => setFieldValue(initialState[type]), [widgetData]);

  console.log(fieldValue, widgetData, "widget data");

  const handleChange = (e) => {
    const { value, checked, type } = e.target;
    switch (type) {
      case "checkbox":
        setFieldValue(checked);
        break;
      default:
        setFieldValue(value);
        break;
    }
  };

  // const handleUpdate = (value, type) => {
  //   let updatedData;

  //   switch (type) {
  //     case "checkbox":
  //       updatedData = { checked: fieldValue };
  //       break;
  //     default:
  //       updatedData = value;

  //   updateNodeData(widgetData.id, { value: fieldValue });

  //   switch (type) {
  //     case "text":
  //       // Handle text input change
  //       break;
  //     case "number":
  //       // Handle number input change
  //       break;
  //     case "checkbox":
  //       // Handle checkbox change
  //       break;
  //     // Add cases for other input types as needed
  //     default:
  //       break;
  //   }
  // };

  let inputComponent;

  switch (type) {
    case "text":
      inputComponent = (
        <div className="d-flex justify-content-center align-items-center h-100">
          <Input
            type="text"
            onChange={handleChange}
            value={fieldValue}
            placeholder={widgetData.placeholder}
            disabled={widgetData.disabled}
            readOnly={widgetData.readOnly}
            maxLength={widgetData.maxLength}
          />
          <button className="btn btn-primary m-2">
            {widgetData.buttonText}
          </button>
        </div>
      );
      break;
    case "number":
      inputComponent = (
        <div className="d-flex justify-content-center align-items-center h-100">
          <Input
            type="number"
            onChange={handleChange}
            value={fieldValue}
            placeholder={widgetData.placeholder}
            disabled={widgetData.disabled}
            readOnly={widgetData.readOnly}
            min={widgetData.min}
            max={widgetData.max}
            step={widgetData.step}
          />
          <button className="btn btn-primary m-2">
            {widgetData.buttonText}
          </button>
        </div>
      );
      break;
    case "checkbox":
      inputComponent = (
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              onChange={handleChange}
              checked={fieldValue}
              disabled={widgetData.disabled}
              readOnly={widgetData.readOnly}
            />
            {widgetData.label}
          </Label>
        </FormGroup>
      );
      break;
    case "select":
      inputComponent = (
        <FormGroup>
          <Label>Select</Label>
          <Input name="select" type="select">
            <option>1</option>
          </Input>
        </FormGroup>
      );
      break;
    default:
      inputComponent = null;
  }

  // updateNodeData(widgetData.id, { image: selectedImage });

  return (
    <div id={widgetData.id} className="widget-node">
      <div className="d-flex justify-content-center align-items-center h-100">
        {inputComponent}
      </div>
    </div>
  );
};

export default InputField;
