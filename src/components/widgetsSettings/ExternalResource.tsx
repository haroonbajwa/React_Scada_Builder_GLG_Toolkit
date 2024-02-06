import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { shallow } from "zustand/shallow";
import useStore, { RFState } from "../../store";

const selector = (state: RFState) => ({
  updateNodeData: state.updateNodeData,
});

const ExternalResourceSettings = ({ widgetData, type }: any) => {
  const { updateNodeData } = useStore(selector, shallow);

  const [link, setLink] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLink(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplySettings = () => {
    updateNodeData(widgetData.id, { link });
  };

  // Render different input fields based on the type
  const renderExternalResource = () => {
    switch (type) {
      case "image":
        return (
          <>
            <Form.Group controlId="imageUpload">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group>
            {link && (
              <div className="text-center mt-2">
                <img src={link} width={200} alt="Selected Image" />
              </div>
            )}
          </>
        );
      case "video":
        return (
          <Form.Group controlId="videoUrl">
            <Form.Label>Video URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter video URL"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </Form.Group>
        );
      case "weblink":
        return (
          <Form.Group controlId="weblinkUrl">
            <Form.Label>Web Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter web link URL"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </Form.Group>
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

export default ExternalResourceSettings;
