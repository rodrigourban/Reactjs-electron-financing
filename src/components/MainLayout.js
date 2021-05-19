import React, { useState } from "react";
import AddNew from "./AddNew";

const MainLayout = (params) => {
  const [netEarnings, setNetEarnings] = useState([]);
  const [grossEarnings, setGrossEarnings] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addField = (values, field, type, lastList) => {
    console.log(values, field, type, lastList);
    if (field.length >= 3) {
      let earnings = [...lastList];
      earnings.push(values);
      switch (type) {
        case 0:
          //Net Earning
          console.log("Net");
          setNetEarnings(earnings);
          break;
        case 1:
          //Gross Earning
          console.log("gross");

          setGrossEarnings(earnings);
          break;
        case 2:
          //expenses
          console.log("expenses");

          setExpenses(earnings);
          break;
      }
    }
  };

  const removeField = (type, lastList, index) => {
    console.log("holis", lastList, index);
    const newList = [...lastList];
    newList.splice(index, 1);
    switch (type) {
      case 0:
        //Net Earning
        console.log("Net");
        setNetEarnings(newList);
        break;
      case 1:
        //Gross Earning
        console.log("gross");

        setGrossEarnings(newList);
        break;
      case 2:
        //expenses
        console.log("expenses");

        setExpenses(newList);
        break;
    }
  };

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return <AddNew></AddNew>;
};

export default MainLayout;
