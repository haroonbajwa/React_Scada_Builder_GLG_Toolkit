import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
} from "reactstrap";
import { shallow } from "zustand/shallow";
import useStore, { RFState } from "../../../store";
import { useState } from "react";

const selector = (state: RFState) => ({
  updateNodeData: state.updateNodeData,
});

const InputField = ({ widgetData, type }: any) => {
  console.log(type, widgetData, "widget data");

  const [fieldValue, setFieldValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.value);
  };

  let inputComponent;

  switch (type) {
    case "text":
      inputComponent = (
        <Input
          type="text"
          value={fieldValue}
          onChange={handleChange}
          placeholder="Enter text"
        />
      );
      break;
    case "number":
      inputComponent = (
        <Input
          type="number"
          value={fieldValue}
          onChange={handleChange}
          placeholder="Enter number"
        />
      );
      break;
    case "checkbox":
      inputComponent = (
        <FormGroup check>
          <Label check>
            <Input type="checkbox" onChange={handleChange} /> Check me out
          </Label>
        </FormGroup>
      );
      break;
    default:
      inputComponent = null;
  }

  const { updateNodeData } = useStore(selector, shallow);

  // updateNodeData(widgetData.id, { image: selectedImage });

  return (
    <div id={widgetData.id} className="widget-node">
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        {inputComponent}
        <button className="btn btn-primary mt-2">Submit</button>
      </div>
    </div>
  );
};

export default InputField;
