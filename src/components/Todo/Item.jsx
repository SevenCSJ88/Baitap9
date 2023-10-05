import React, { useState, useContext } from "react";
import "./styles.css";
import { Checkbox, Typography, Input, Button } from "antd";
import { MdModeEditOutline } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { TododContext } from "../../App";

const Item = ({ item }) => {
  const { name, id, isCompleted } = item;
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(name);

  const {
    handleToggleComplete,
    handleEditItem,
    handleDeleteItem,
  } = useContext(TododContext);

  const handleCheck = () => {
    handleToggleComplete(id);
  };

  const handleSave = () => {
    handleEditItem(id, editedValue);
    setIsEditing(false);
  };

  const handleDelete = () => {
    handleDeleteItem(id);
  };

  return (
    <div className="item">
      <div className="item-left">
        <Checkbox checked={isCompleted} onChange={handleCheck} />
        {isEditing ? (
          <Input
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
            onPressEnter={handleSave}
          />
        ) : (
          <Typography>{name}</Typography>
        )}
      </div>
      <div className="item-right">
        <MdModeEditOutline
          color="#cce5f0"
          size={20}
          className="item-icon"
          onClick={() => setIsEditing(true)}
        />
        <IoMdTrash
          color="#cce5f0"
          size={20}
          className="item-icon"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default Item;
