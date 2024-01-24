import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { shallow } from "zustand/shallow";
import useStore, { RFState } from "../../store";

const selector = (state: RFState) => ({
  updateNodeData: state.updateNodeData,
});

const DialSettings = ({ widgetData }: any) => {
  const { updateNodeData } = useStore(selector, shallow);

  const [dataSource, setDataSource] = useState("custom");
  const [customValue, setCustomValue] = useState(0);

  const handleApplySettings = () => {
    if (dataSource === "custom") {
      updateNodeData(widgetData.id, { dataSource, value: customValue });
    } else if (dataSource === "random") {
      updateNodeData(widgetData.id, { dataSource });
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group controlId="selectDataSource">
            <Form.Label>Data source</Form.Label>
            <Form.Control
              as="select"
              value={dataSource}
              onChange={(e) => setDataSource(e.target.value)}
            >
              <option value="custom">Custom</option>
              <option value="random">Generate Random</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="customValue">
            <Form.Label>Custom Value</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter custom value"
              value={customValue}
              onChange={(e) => setCustomValue(Number(e.target.value))}
              disabled={dataSource === "random"}
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

export default DialSettings;
