import Modal from "./components/Modal";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Modal />
    </div>
  );
};

export default App;
