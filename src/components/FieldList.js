import React from "react";
import { Form, Input, Button, Space } from "antd";

const FieldList = (params) => {
  console.log(params);
  return (
    <Form>
      {params.fields.map((item) => (
        <h1>Gay</h1>
      ))}
    </Form>
  );
};

export default FieldList;
