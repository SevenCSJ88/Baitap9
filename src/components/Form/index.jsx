import React, { useContext, useState } from "react";
import "./styles.css";
import { Button, Input } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import { TododContext } from "../../App";
const Form = () => {
  const { handleAddTodo } = useContext(TododContext);
  const [value, setValue] = useState("");

  const onClick = () => {
    const newTodo = {
      id: new Date().getTime(),
      isCompleted: false,
      name: value,
    };

    handleAddTodo(newTodo);
    setValue("");
  };
  return (
    <div className="form">
      <Input
        size="large"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        size="large"
        type="primary"
        onClick={onClick}
        style={{
          background: "#5ba3c9",
        }}
      >
        <AiOutlinePlus />
      </Button>
    </div>
  );
};

export default Form;