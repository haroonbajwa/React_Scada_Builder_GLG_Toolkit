import "./App.css";
import Flow from "./components/Flow";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    // <div style={{ height: "100vh", width: "100vw", display: "flex" }}>
    //   <div
    //     className="sidebar"
    //     style={{
    //       height: "100vh",
    //       width: "300px",
    //       backgroundColor: "#747474",
    //     }}
    //   >
    //     <Sidebar />
    //   </div>
    <div className="canvas" style={{ height: "100%", width: "100%" }}>
      <Flow />
    </div>
    // </div>
    // <div style={{ display: "flex" }}>
    //   <Sidebar />
    //   <Flow />
    // </div>
  );
}

export default App;
