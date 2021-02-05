import React from "react";

const fs = window.require("fs");

const CustomButton = () => {
  const btnLoad = () => {
    console.log("Se apreto boton magico");

    fs.readFile("data.json", function (err, buff) {
      console.log(JSON.parse(buff));
    });
  };

  const btnSave = () => {
    const testData = [{ primero: "Yo" }, { segundo: "Los demas pa" }];
    let toDumpData = JSON.stringify(testData, null, 2);
    fs.writeFile("data.json", toDumpData, (err) => {
      if (err) console.log(err);
      console.log("Guardado exitosamente");
    });
  };

  return <button onClick={btnLoad}>Custom button</button>;
};

export default CustomButton;
