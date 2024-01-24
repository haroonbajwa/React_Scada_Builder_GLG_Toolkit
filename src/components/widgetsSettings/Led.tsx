import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { shallow } from "zustand/shallow";
import useStore, { RFState } from "../../store";

const selector = (state: RFState) => ({
  updateNodeData: state.updateNodeData,
});

const LedSettings = ({ widgetData }: any) => {
  const { updateNodeData } = useStore(selector, shallow);
  const [customValue, setCustomValue] = useState({
    value0: 0,
    value1: 0,  
    value2: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomValue((prevValues) => ({
      ...prevValues,
      [name]: parseInt(value, 10) || 0, // Ensure it's a valid number
    }));
  };

  const handleApplySettings = () => {
    updateNodeData(widgetData.id, customValue);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group
            controlId="digit1"
            onSubmit={() => console.log("submitted")}
          >
            <Form.Control
              type="number"
              placeholder="Digit 1"
              name="value0"
              value={customValue.value0}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="digit2">
            <Form.Control
              type="number"
              placeholder="Digit 2"
              name="value1"
              value={customValue.value1}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="digit3">
            <Form.Control
              type="number"
              placeholder="Digit 3"
              name="value2"
              value={customValue.value2}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" onClick={handleApplySettings}>
            Apply Settings
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LedSettings;
