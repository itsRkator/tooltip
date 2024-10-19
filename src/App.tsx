import Tooltip from "./components/Tooltip";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <Tooltip
        content="This is a tooltip handled on mouse hover event!"
        trigger="hover"
      >
        Hover!
      </Tooltip>
      <Tooltip
        content="This is a tooltip handled on mouse click event!"
        trigger="click"
      >
        Click!
      </Tooltip>
    </div>
  );
}

export default App;
