import Home from "./components/Home";
import MainLayout from "./components/MainLayout";

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
      <MainLayout></MainLayout>
    </div>
  );
};

export default App;
