import { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { shallow } from "zustand/shallow";
import useStore, { RFState } from "../../store";

const selector = (state: RFState) => ({
  updateNodeData: state.updateNodeData,
});

const InputFieldSettings = ({ widgetData, type }: any) => {
  const { updateNodeData } = useStore(selector, shallow);

  const [settings, setSettings] = useState(widgetData);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const updatedSettings = { ...settings };

    // Update the settings based on the input type
    if (type === "checkbox") {
      updatedSettings[name] = checked;
    } else if (type === "number") {
      updatedSettings[name] = value;
    } else {
      updatedSettings[name] = value;
    }

    setSettings(updatedSettings);
  };

  const handleApplySettings = () => {
    updateNodeData(widgetData.id, settings);
  };

  // Render different input fields based on the type
  const renderExternalResource = () => {
    switch (type) {
      case "text":
        return (
          <Form>
            <Form.Group controlId="inputValue">
              <Form.Label>Value</Form.Label>
              <Form.Control
                type="text"
                name="value"
                value={settings.value}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="inputPlaceholder">
              <Form.Label>Placeholder</Form.Label>
              <Form.Control
                type="text"
                name="placeholder"
                value={settings.placeholder}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="inputButtonText">
              <Form.Label>Button Text</Form.Label>
              <Form.Control
                type="text"
                name="buttonText"
                value={settings.buttonText}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="inputDisabled">
              <Form.Check
                type="checkbox"
                label="Disabled"
                name="disabled"
                checked={settings.disabled}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="inputReadOnly">
              <Form.Check
                type="checkbox"
                label="Read Only"
                name="readOnly"
                checked={settings.readOnly}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="inputMaxLength">
              <Form.Label>Max Length</Form.Label>
              <Form.Control
                type="number"
                name="maxLength"
                value={settings.maxLength}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        );

      case "number":
        return (
          <Form>
            <Form.Group controlId="inputValue">
              <Form.Label>Value</Form.Label>
              <Form.Control
                type="number"
                name="value"
                value={settings.value}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="inputPlaceholder">
              <Form.Label>Placeholder</Form.Label>
              <Form.Control
                type="text"
                name="placeholder"
                value={settings.placeholder}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="inputButtonText">
              <Form.Label>Button Text</Form.Label>
              <Form.Control
                type="text"
                name="buttonText"
                value={settings.buttonText}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="inputDisabled">
              <Form.Check
                type="checkbox"
                label="Disabled"
                name="disabled"
                checked={settings.disabled}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="inputReadOnly">
              <Form.Check
                type="checkbox"
                label="Read Only"
                name="readOnly"
                checked={settings.readOnly}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="inputMin">
              <Form.Label>Min</Form.Label>
              <Form.Control
                type="number"
                name="min"
                value={settings.min}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="inputMax">
              <Form.Label>Max</Form.Label>
              <Form.Control
                type="number"
                name="max"
                value={settings.max}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="inputStep">
              <Form.Label>Step</Form.Label>
              <Form.Control
                type="number"
                name="step"
                value={settings.step}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        );
      case "checkbox":
        return (
          <Form>
            <Form.Group controlId="inputChecked">
              <Form.Check
                type="checkbox"
                label="Checked"
                name="checked"
                checked={settings.checked}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="inputLabel">
              <Form.Label>Label</Form.Label>
              <Form.Control
                type="text"
                name="label"
                value={settings.label}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="inputDisabled">
              <Form.Check
                type="checkbox"
                label="Disabled"
                name="disabled"
                checked={settings.disabled}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="inputReadOnly">
              <Form.Check
                type="checkbox"
                label="Read Only"
                name="readOnly"
                checked={settings.readOnly}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        );

      default:
        return null;
    }
  };

  return (
    <Container>
      <Row>
        <Col>{renderExternalResource()}</Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary mt-3" onClick={handleApplySettings}>
            Apply Settings
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default InputFieldSettings;
