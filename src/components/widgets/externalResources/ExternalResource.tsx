import { Image } from "react-bootstrap";
import ReactPlayer from "react-player";

const ExternalResource = ({ widgetData, type, disableInput }: any) => {
  // Render different content based on the type
  const renderContent = () => {
    switch (type) {
      case "image":
        return <Image src={widgetData.link} fluid />;
      case "video":
        return (
          <ReactPlayer
            style={(disableInput && { pointerEvents: "none" }) || {}}
            width="100%"
            height="100%"
            url={widgetData.link}
            controls
          />
        );
      case "web":
        return (
          <iframe
            src={widgetData.link}
            width="100%"
            height="100%"
            style={(disableInput && { pointerEvents: "none" }) || {}}
            title="Web Link"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div id={widgetData.id} className="widget-node">
      <div
        className="custom-file d-flex justify-content-center"
        style={{ height: "100%" }}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default ExternalResource;
