import { Button } from "antd";
import React , { useContext } from "react";
import { TododContext } from "../../App";

const RemoveAll = () => {
  const { handleRemoveAllCompleted } = useContext(TododContext);

  const onRemoveAll = () => {
    handleRemoveAllCompleted();
  };

  return (
    <Button
      type="primary"
      style={{
        background: "#5ba3c9",
      }}
      onClick={onRemoveAll}
    >
      Remove checked
    </Button>
  );
};

export default RemoveAll;