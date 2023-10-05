import React ,{useContext} from "react";
import { TododContext } from "../../App";

const Progress = () => {
  const { todos } = useContext(TododContext);

  const completedCount = todos.filter((todo) => todo.isCompleted).length;
  const totalCount = todos.length;

  return (
    <div className="progress">
      <span className="layer-progress"></span>
      <div className="progress-content">
        <p className="text">
          <span className="bold">{completedCount}</span> of
          <span className="bold">{totalCount}</span> tasks done
        </p>
      </div>
    </div>
  );
};

export default Progress;